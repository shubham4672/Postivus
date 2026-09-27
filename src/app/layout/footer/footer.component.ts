import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-footer',
  imports: [NavbarComponent, ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
