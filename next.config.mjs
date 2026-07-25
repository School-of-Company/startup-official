import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
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
