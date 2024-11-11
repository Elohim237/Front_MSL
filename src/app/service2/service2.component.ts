import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrl: './service2.component.css'
})
export class Service2Component {
  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('header');
    if (window.pageYOffset > header!.offsetTop) {
      header!.classList.add('sticky');
    } else {
      header!.classList.remove('sticky');
    }

    this.updateDynamicImage();
  }

  updateDynamicImage() {
    const sections = document.querySelectorAll('.section');
    const image = document.getElementById('dynamic-image') as HTMLImageElement;
    const images: { [key: string]: string } = {
      'crm': '../../assets/img/servicePage/hero_image.jpg',
      'ventes': '../../assets/img/servicePage/interface.jpg',
      'pos': '../../assets/img/servicePage/rental_product.jpg',
      'abonnements': '../../assets/img/servicePage/hero_image.jpg',
      'location': '../../assets/img/servicePage/interface.jpg'
    };

    let lastSection: string | undefined;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        lastSection = section.id;
      }
    });

    if (lastSection && image.src !== images[lastSection]) {
      image.src = images[lastSection];
    }
  }


}
