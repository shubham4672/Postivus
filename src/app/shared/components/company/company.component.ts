import { Component, input } from '@angular/core';

@Component({
  selector: 'app-company',
  imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent {
  source = input<string>();
  alternateText = "company-logo";
}
