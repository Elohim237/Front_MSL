import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  isMobile = window.innerWidth <= 768;
  isDropdownOpen = false;

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
    this.isDropdownOpen = !this.isDropdownOpen;
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
