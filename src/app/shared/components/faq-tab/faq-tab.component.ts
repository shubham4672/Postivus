import { Component, input, output } from '@angular/core';
import { FAQ } from '../../modals/faq.modal';

@Component({
  selector: 'app-faq-tab',
  imports: [],
  templateUrl: './faq-tab.component.html',
  styleUrl: './faq-tab.component.scss',
})
export class FaqTabComponent {
  faq = input.required<FAQ>();
  isActive = input<Boolean>();
  accordianEvent = output<string>();

  handleAccordian(id: string) {
    this.accordianEvent.emit(id);
  }
}
