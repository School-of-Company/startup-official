/** Guards against non-http(s) protocols (e.g. `javascript:`) before a value is rendered as a link href. */
export function isHttpUrl(value: string): boolean {
  try {
    const { protocol } = new URL(value);
    return protocol === "https:" || protocol === "http:";
  } catch {
    return false;
  }
}
