import { Component, OnChanges, OnDestroy, Input, SimpleChanges } from "@angular/core";
import { IEventListener } from "../events/i-event-listener";

@Component({ template: '' })
export abstract class ModelEventLifeCycle implements OnChanges, OnDestroy {
    @Input() model: IEventListener | undefined;

    ngOnChanges(changes: SimpleChanges): void {
        const modelChanges = changes["model"];
        if (modelChanges && !modelChanges.firstChange && modelChanges.previousValue) {
            (modelChanges.previousValue as IEventListener).removeListeners();
        }
    }
    
    ngOnDestroy(): void {
        // Supprime les listeners
        // Dans certains cas, le model peut avoir été détruit par le model parent ainsi que les listeners
        if (this.model) {
            this.model.removeListeners();
        }
    }
}