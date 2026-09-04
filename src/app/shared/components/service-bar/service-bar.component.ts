import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-service-bar',
  imports: [],
  templateUrl: './service-bar.component.html',
  styleUrl: './service-bar.component.scss',
})
export class ServiceBarComponent {
  title = input<String>();
}
