import { MessageService } from "primeng/api";
import { LeftPanelVM } from "./components/left-panel/left-panel-vm";
import { RightPanelVM } from "./components/right-panel/right-panel-vm";
import { ToolbarVM } from "./components/toolbar/toolbar-vm";

export class AppVM {
    messageService: MessageService;
    toolbarVM: ToolbarVM;
    leftPanelVM: LeftPanelVM | undefined;
    rightPanelVm: RightPanelVM | undefined;

    constructor(messageService: MessageService) {
        this.messageService = messageService;

        this.toolbarVM = new ToolbarVM();

        // simple MVVM event example
        // parent model listen to child event passing it's own specific callback method
        // don't forget the .bind(this) to bind the context
        this.toolbarVM.menuItemClicked = this.menuItemClicked.bind(this);

        this.setContentPanels();
    }

    setContentPanels(): void {
        this.leftPanelVM = undefined;
        this.leftPanelVM = new LeftPanelVM();
        this.rightPanelVm = undefined;
        this.rightPanelVm = new RightPanelVM();
    }

    menuItemClicked(menuId: string): void {
        // here the event listener uses the PrimeNG MessageService to display a popup (toast) message
        this.messageService.add({ severity: 'success', summary: 'Menu clicked', detail: menuId });

        if (menuId === 'resetContent') {
            this.setContentPanels();
        }
    }

}