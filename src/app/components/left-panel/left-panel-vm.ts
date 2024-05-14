import { AppEventsEnum } from './../../events/app-events-enum';
import { EventListener } from "../../events/event-listener";
import { readableUUID } from "../../events/readable-uuid";

export class LeftPanelVM extends EventListener {
    message: string = "";
    lastMessage: string = "none";

    constructor() {
        super(readableUUID(LeftPanelVM.name));

        this.addEventListener(AppEventsEnum.rightPanelMessageSentEvent, (message: string) => {
            this.lastMessage = message;
        });
    }

    onSayButtonClick(): void {
        this.emitEventAsync(AppEventsEnum.leftPanelMessageSentEvent, this.message);
        this.message = "";
    }
}