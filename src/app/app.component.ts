import { Component, Input } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SplitterModule } from 'primeng/splitter';
import { AppVM } from './app-vm';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToastModule, ToolbarComponent, SplitterModule, LeftPanelComponent, RightPanelComponent],
  templateUrl: './app.component.html',
  providers: [MessageService]
})
export class AppComponent {
  title = 'mvvm-model-events';

  // root model. The model is a tree as is the UI
  @Input() model: AppVM;

  constructor(messageService: MessageService) {
    this.model = new AppVM(messageService);
  }
}
