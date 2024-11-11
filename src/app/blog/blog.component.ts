import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  articles = [
    {
      img: '../../assets/img/accueil/img1.png',
      date: '02 Juillet, 2024',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      link: '#'
    },
    {
      img: '../../assets/img/accueil/img2.png',
      date: '02 Juillet, 2024',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      link: '#'
    },
    {
      img: '../../assets/img/accueil/img3.png',
      date: '02 Juillet, 2024',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      link: '#'
    }
  ];
}
