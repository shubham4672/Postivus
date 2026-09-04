import { Component } from '@angular/core';
import { CompanyComponent } from '../../shared/components/company/company.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-home',
  imports: [CompanyComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  images = [
    { id: 1, path: '/images/companies/clogo1.png' },
    { id: 2, path: '/images/companies/clogo2.png' },
    { id: 3, path: '/images/companies/clogo3.png' },
    { id: 4, path: '/images/companies/clogo4.png' },
    { id: 5, path: '/images/companies/clogo5.png' },
    { id: 6, path: '/images/companies/clogo6.png' },
  ];
}
