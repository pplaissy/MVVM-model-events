export function readableUUID(prefix: string): string {
    return `${prefix}.${crypto.randomUUID()}`;
}
