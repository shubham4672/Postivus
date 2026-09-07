import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {
  heading = input<String>();
  description = input<String>();
}
