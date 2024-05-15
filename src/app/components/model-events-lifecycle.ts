import { Component, OnChanges, OnDestroy, Input, SimpleChanges } from "@angular/core";
import { IEventListener } from "../events/i-event-listener";

@Component({ template: '' })
export abstract class ModelEventLifeCycle implements OnChanges, OnDestroy {
    @Input() model: IEventListener | undefined;

    ngOnChanges(changes: SimpleChanges): void {
        const modelChanges = changes["model"];
        if (modelChanges && !modelChanges.firstChange && modelChanges.previousValue) {
            // remove the listeners if a new instance of the model is created
            (modelChanges.previousValue as IEventListener).removeListeners();
        }
    }
    
    ngOnDestroy(): void {
        // remove the listeners
        // in some cases, model and listeners could have been already destroyed par the parent model
        if (this.model) {
            this.model.removeListeners();
        }
    }
}