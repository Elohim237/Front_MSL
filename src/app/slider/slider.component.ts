import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  slides = [
    {
      id: 'slide1',
      img: '../../assets/img/accueil/hom1.png',
      title: 'Gérez simplement, innovez différemment avec',
      highlight: 'Odoo',
      description: 'Réinventez votre activité grâce à des solutions logicielles conçues pour répondre à votre marché.',
      buttons: []
    },
    {
      id: 'slide2',
      img: '../../assets/img/accueil/hom2.png',
      title: 'Nous sommes partenaire',
      highlight: 'Odoo',
      description: 'Prenez contact avec un de nos experts Odoo dès maintenant pour discuter de vos besoins.',
      buttons: [
        { text: 'Contactez-nous', link: 'contact', color: '#ffcc00', textColor: '#000000' },
        { text: 'Réserver une démo', link: 'reserve-demo', color: '#022b3a', textColor: '#ffffff' }
      ]
    },
    {
      id: 'slide3',
      img: '../../assets/img/accueil/hom3.png',
      title: 'Support 6J/7 24/24 - Français/Anglais',
      highlight: 'anticiper demain',
      description: 'Représenté dans 3 pays, même service, même standard',
      buttons: [
        { text: 'Contactez-nous', link: 'about', color: '#ffcc00', textColor: '#000000' }
      ]
    }
  ];
  

  constructor(private router: Router){}
  currentSlide = 0;
  totalSlides = this.slides.length;
  intervalId: any;

  ngOnInit() {
    this.showSlide(this.currentSlide);
    this.intervalId = setInterval(() => this.nextSlide(), 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  showSlide(index: number) {
    this.currentSlide = index;
  }

  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.totalSlides;
    this.showSlide(nextIndex);
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
