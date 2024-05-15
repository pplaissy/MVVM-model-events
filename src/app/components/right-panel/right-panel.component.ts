import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RightPanelVM } from './right-panel-vm';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ModelEventLifeCycle } from '../model-events-lifecycle';

@Component({
  selector: 'app-right-panel',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule, FloatLabelModule],
  templateUrl: './right-panel.component.html'
})
export class RightPanelComponent extends ModelEventLifeCycle {
  @Input() override model: RightPanelVM | undefined;
}
