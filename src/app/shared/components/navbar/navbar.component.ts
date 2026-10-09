import { Component, input, output, signal } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  mainNav = input<boolean>();
  toggleHamburger = output<boolean>();

  navbarToggle() {
    this.toggleHamburger.emit(true);
  }
}
