import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Service } from '../../shared/modals/services.modal';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  private http = inject(HttpClient);
  services: Service[] = [];

  ngOnInit(): void {
    this.http.get<Service[]>('/assets/data/services.json').subscribe((data) => {
      this.services = data;
    });
  }
}
