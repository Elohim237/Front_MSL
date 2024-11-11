import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
isMobile = window.innerWidth <= 768;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

onResize() {
  this.isMobile = window.innerWidth <= 768;
}
}
