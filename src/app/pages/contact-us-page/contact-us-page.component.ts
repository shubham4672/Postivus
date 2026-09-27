import { Component } from '@angular/core';
import { HeadingComponent } from "../../shared/components/heading/heading.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-contact-us-page',
  imports: [HeadingComponent, ButtonComponent],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.scss'
})
export class ContactUsPageComponent {

}
