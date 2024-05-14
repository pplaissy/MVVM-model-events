import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LeftPanelVM } from '../left-panel-vm';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ModelEventLifeCycle } from '../../model-events-lifecycle';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule, FloatLabelModule],
  templateUrl: './left-panel.component.html'
})
export class LeftPanelComponent extends ModelEventLifeCycle {
  @Input() override model: LeftPanelVM | undefined;
}
