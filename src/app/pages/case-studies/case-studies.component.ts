import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/components/heading/heading.component';
import { KeyPerformanceComponent } from '../../shared/components/key-performance/key-performance.component';

@Component({
  selector: 'app-case-studies',
  imports: [HeadingComponent, KeyPerformanceComponent],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss',
})
export class CaseStudiesComponent {
  details = [
    {
      id: 1,
      info:
        'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    },
    {
      id: 2,
      info:
        'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
    },
    {
      id: 3,
      info:
        'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
    },
  ];
}
