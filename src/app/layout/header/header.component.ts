import { Component, input, signal } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mainNav = input<boolean>();
  showHamburger = signal<boolean>(false);

  closeNavigation() {
    this.showHamburger.set(false);
  }

  toogleHamburger(displayHamburger: boolean) {
    this.showHamburger.set(displayHamburger);
  }
}
