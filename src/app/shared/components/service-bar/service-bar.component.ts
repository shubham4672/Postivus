import { Component, inject, input } from '@angular/core';
import { Service } from '../../modals/services.modal';

@Component({
  selector: 'app-service-bar',
  imports: [],
  templateUrl: './service-bar.component.html',
  styleUrl: './service-bar.component.scss',
})
export class ServiceBarComponent {
  service = input<Service>();
}
