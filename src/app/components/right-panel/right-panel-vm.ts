import { AppEventsEnum } from "../../events/app-events-enum";
import { EventListener } from "../../events/event-listener";
import { readableUUID } from "../../events/readable-uuid";

export class RightPanelVM extends EventListener {
    message: string = "";
    lastMessage: string = "none";

    constructor() {
        super(readableUUID(RightPanelVM.name));

        this.addEventListener(AppEventsEnum.leftPanelMessageSentEvent, (message: string) => {
            this.lastMessage = message;
        });
    }

    onSayButtonClick(): void {
        this.emitEventAsync(AppEventsEnum.rightPanelMessageSentEvent, this.message);
        this.message = "";
    }
}