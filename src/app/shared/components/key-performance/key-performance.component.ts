import { Component, input } from '@angular/core';

@Component({
  selector: 'app-key-performance',
  imports: [],
  templateUrl: './key-performance.component.html',
  styleUrl: './key-performance.component.scss',
})
export class KeyPerformanceComponent {
  detail = input<String>();
}
