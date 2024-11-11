import { Component } from '@angular/core';

@Component({
  selector: 'app-avantages-odoo',
  templateUrl: './avantages-odoo.component.html',
  styleUrl: './avantages-odoo.component.css'
})
export class AvantagesOdooComponent {
  slides = [
    {
      image: '../../assets/img/avantages/avantage 2.png',
      alt: 'Automatisation et Gain de temps',
      title: 'Automatisation et Gain de temps',
      description: 'Lorem ipsum dolor sit amet consectetur. Tempus ullamcorper mauris egestas faucibus morbi.'
    },
    {
      image: '../../assets/img/avantages/avantage1.png',
      alt: 'Rapport financier et analyse',
      title: 'Rapport financier et analyse',
      description: 'Lorem ipsum dolor sit amet consectetur. Un pretium proin sed facilisis non cursus est eu eget.'
    },
    {
      image: '../../assets/img/avantages/avantage1.png',
      alt: 'Diapositive supplémentaire',
      title: 'Diapositive supplémentaire',
      description: 'Lorem ipsum dolor sit amet consectetur. Un pretium proin sed facilisis non cursus est eu eget.'
    },
    {
      image: '../../assets/img/avantages/avantage 2.png',
      alt: 'Encore une diapositive',
      title: 'Encore une diapositive',
      description: 'Lorem ipsum dolor sit amet consectetur. Un pretium proin sed facilisis non cursus est eu eget.'
    }
  ];

  currentIndex = 0;

  getTranslateValue(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide(): void {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
  }
}
