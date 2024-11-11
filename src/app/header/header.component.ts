import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  isDropdownOpen = false;
  isMobile = window.innerWidth <= 768;

  ngOnInit() {
    // Initialisation pour détecter si l'écran est mobile
    this.onResize();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Ferme le sous-menu si le menu principal est fermé
    if (!this.isMenuOpen) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown() {
    // Permet d’ouvrir/fermer le sous-menu uniquement sur mobile
    if (this.isMobile) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;

    // Ferme le sous-menu automatiquement si l'écran est élargi
    if (!this.isMobile) {
      this.isDropdownOpen = false;
    }
  }
}
