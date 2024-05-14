import { Component, Input } from '@angular/core';
import { ToolbarVM } from '../model/toolbar-vm';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  @Input() model: ToolbarVM | undefined;
}
