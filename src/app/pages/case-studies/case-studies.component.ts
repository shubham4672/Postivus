import { Component, inject, OnInit } from '@angular/core';
import { HeadingComponent } from '../../shared/components/heading/heading.component';
import { KeyPerformanceComponent } from '../../shared/components/key-performance/key-performance.component';
import { HttpClient } from '@angular/common/http';
import { Detail } from '../../shared/modals/detail.modal';

@Component({
  selector: 'app-case-studies',
  imports: [HeadingComponent, KeyPerformanceComponent],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss',
})
export class CaseStudiesComponent implements OnInit {
  private http = inject(HttpClient);
  details: Detail[] = [];

  ngOnInit(): void {
    this.http.get<Detail[]>('/data/details.json').subscribe((data) => {
      this.details = data;
    });
  }
}
