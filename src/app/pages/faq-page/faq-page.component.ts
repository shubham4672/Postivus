import { Component, inject, OnInit } from '@angular/core';
import { HeadingComponent } from '../../shared/components/heading/heading.component';
import { FAQ } from '../../shared/modals/faq.modal';
import { HttpClient } from '@angular/common/http';
import { FaqTabComponent } from '../../shared/components/faq-tab/faq-tab.component';

@Component({
  selector: 'app-faq-page',
  imports: [HeadingComponent, FaqTabComponent],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss',
})
export class FaqPageComponent implements OnInit {
  faqs: FAQ[] = [];
  private http = inject(HttpClient);

  handleAccordianEvents(id: string) {
    this.faqs.map((faq) => {
      return {...faq, isActive: faq.id === String(id) ? !faq.isActive : false}
    })
    console.log(id);
  }

  ngOnInit(): void {
    this.http.get<FAQ[]>('/data/faqs.json').subscribe((data) => {
      this.faqs = data;
    });
  }
}
