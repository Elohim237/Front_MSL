import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  isDropdownOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Optionnel : Fermer le menu lorsqu'un lien est cliqué (mobile)
  closeMenu() {
    this.isMenuOpen = false;
    this.isDropdownOpen = false;
  }

  onDropdownClick(event: Event): void {
    event.preventDefault();
    this.toggleDropdown();
  }
  
}
