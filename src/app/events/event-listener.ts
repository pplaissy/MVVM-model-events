import { EventCallbackStore } from "./event-callback-store";
import { IEventListener } from "./i-event-listener";
import { EventEmitter } from "./event-emitter";
import { container } from "tsyringe";

export abstract class EventListener extends EventEmitter implements IEventListener {
    invariantId: string;

    constructor(invariantId: string) {
        super();
        this.invariantId = invariantId;
    }

    addEventListener(eventName: string, method: any): void {
        const ps = container.resolve(EventCallbackStore);
        ps.addEventListener(this.invariantId, eventName, method);
    }

    removeListeners(eventName?: string): void {
        const ps = container.resolve(EventCallbackStore);
        ps.cleanStore(this.invariantId, eventName);
    }
}