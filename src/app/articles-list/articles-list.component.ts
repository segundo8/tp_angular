import { Component } from '@angular/core';
import { article } from './articles';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {

  articles: article[] = [
    {
      name : 'Iphone',
      category : 'Celulares',
      price : 1000,
      quantity : 15,
      image : 'assets/img/iphone.png'
    },
    {
      name : 'Smart Tv Samsung',
      category : 'Televisores',
      price : 500,
      quantity : 5,
      image : 'assets/img/televisor.jpg'
    },
    {
      name : 'Tablet Samsung',
      category : 'Tablets',
      price : 200,
      quantity : 1,
      image : 'assets/img/tablet.jpg'
    },
    {
      name : 'Monitor',
      category : 'Monitores',
      price : 150,
      quantity : 0,
      image : 'assets/img/monitor.jpg'
    }
  ];
  
}