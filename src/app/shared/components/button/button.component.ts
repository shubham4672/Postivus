import { Component, input } from '@angular/core';
import { ModeType } from '../../modals/button.modal';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  content = input<string>();
  mode = input<ModeType>();
}
