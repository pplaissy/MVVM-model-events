import { MenuItem } from "primeng/api";
import { AppEventsEnum } from "../../events/app-events-enum";
import { readableUUID } from "../../events/readable-uuid";
import { EventListener } from "../../events/event-listener";

export class ToolbarVM extends EventListener {
    menuItems: MenuItem[];
    leftMessagesCount: number = 0;
    rightMessagesCount: number = 0;

    constructor() {
        super(readableUUID(ToolbarVM.name));

        this.menuItems = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                command: () => this.menuItemClick("home")
            },
            {
                label: 'Features',
                icon: 'pi pi-star',
                command: () => this.menuItemClick("features")
            },
            {
                label: 'Reset content',
                icon: 'pi pi-trash',
                command: () => this.menuItemClick("resetContent")
            }
        ]

        this.addEventListener(AppEventsEnum.leftPanelMessageSentEvent, (message: string) => {
            this.leftMessagesCount++;
        })

        this.addEventListener(AppEventsEnum.rightPanelMessageSentEvent, (message: string) => {
            this.rightMessagesCount++;
        })
    }

    // declare a function to be called on menu item click
    // this function must be defined from outside by the class that needs to be notified of the event
    menuItemClicked?: (id: string) => void;
    menuItemClick(id: string): void {
        if (this.menuItemClicked) {
            this.menuItemClicked(id);
        }
    }
}