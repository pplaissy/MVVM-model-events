// just a small function to return a human readable unique id
// for better console log experience
export function readableUUID(prefix: string): string {
    return `${prefix}.${crypto.randomUUID()}`;
}
