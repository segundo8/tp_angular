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
      image : 'assets/img/iphone.png',
      addproduct : 0,
    },
    {
      name : 'Smart Tv Samsung',
      category : 'Televisores',
      price : 500,
      quantity : 5,
      image : 'assets/img/televisor.jpg',
      addproduct : 0,
    },
    {
      name : 'Tablet Samsung',
      category : 'Tablets',
      price : 200,
      quantity : 1,
      image : 'assets/img/tablet.png',
      addproduct : 0,
    },
    {
      name : 'Monitor',
      category : 'Monitores',
      price : 150,
      quantity : 0,
      image : 'assets/img/monitor.jpg',
      addproduct : 0,
    }
  ];
 
  upProduct(article: article): void {
    if (article.quantity > article.addproduct)
      article.addproduct++;
  }

  downProduct(article: article): void {
    if (article.addproduct > 0)
      article.addproduct--;
  }

}