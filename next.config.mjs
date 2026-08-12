import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Next's dev-mode webpack runtime (HMR/React Refresh) executes modules via
// `eval`, so script-src needs 'unsafe-eval' locally. Production doesn't use
// eval and stays stricter without it.
const SCRIPT_SRC =
  process.env.NODE_ENV === "production"
    ? "script-src 'self' 'unsafe-inline'"
    : "script-src 'self' 'unsafe-inline' 'unsafe-eval'";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      SCRIPT_SRC,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  // Next's automatic tsconfig `paths` -> webpack alias wiring doesn't kick in
  // when the native SWC binary is unavailable and it falls back to the WASM
  // build (see: Application Control policy blocking @next/swc-win32-x64-msvc
  // on this machine). Wire the `@/*` alias explicitly so it keeps working.
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  typescript: {
    // Next's built-in "Running TypeScript" build step crashes under the same
    // native-SWC-unavailable condition ("invalid type: unit value, expected
    // usize" from the WASM fallback). Type safety is verified separately via
    // plain `tsc --noEmit` (see package.json's `typecheck` script), which
    // doesn't touch SWC at all.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
