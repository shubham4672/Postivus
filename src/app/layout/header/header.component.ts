import { Component, input, signal } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-header',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mainNav = input<boolean>();
  showHamburger = signal<boolean>(false);
  toogleHamburger(displayHamburger: boolean) {
    this.showHamburger.set(displayHamburger);
  }
}
