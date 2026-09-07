import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Service } from '../../shared/modals/services.modal';
import { ServiceBarComponent } from "../../shared/components/service-bar/service-bar.component";
import { HeadingComponent } from "../../shared/components/heading/heading.component";

@Component({
  selector: 'app-services',
  imports: [ServiceBarComponent, HeadingComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  private http = inject(HttpClient);
  services: Service[] = [];

  ngOnInit(): void {
    this.http.get<Service[]>('/data/services.json').subscribe((data) => {
      this.services = data;
    });
  }
}
