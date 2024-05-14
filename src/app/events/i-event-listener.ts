export interface IEventListener {
    invariantId: string;
    addEventListener(methodName: string, method: any): void;
    removeListeners(): void;
}