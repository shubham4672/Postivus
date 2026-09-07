import { Component, input } from '@angular/core';
import { FAQ } from '../../modals/faq.modal';

@Component({
  selector: 'app-faq-tab',
  imports: [],
  templateUrl: './faq-tab.component.html',
  styleUrl: './faq-tab.component.scss',
})
export class FaqTabComponent {
  faq = input<FAQ>();
  isActive = input<Boolean>();
}
