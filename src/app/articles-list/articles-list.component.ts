import { Component } from '@angular/core';
import { TecnoworldCartService } from '../tecnoworld-cart.service';
import { Article } from './articles';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {

  articles: Article[] = [
    {
      name : 'Iphone',
      category : 'Celulares',
      price : 1000,
      quantity : 15,
      image : 'https://github.com/segundo8/tp_angular/blob/main/src/assets/img/iphone.png?raw=true',
      addproduct : 0,
    },
    {
      name : 'Smart Tv Samsung',
      category : 'Televisores',
      price : 500,
      quantity : 5,
      image : 'https://github.com/segundo8/tp_angular/blob/main/src/assets/img/televisor.jpg?raw=true',
      addproduct : 0,
    },
    {
      name : 'Tablet Samsung',
      category : 'Tablets',
      price : 200,
      quantity : 1,
      image : 'https://github.com/segundo8/tp_angular/blob/main/src/assets/img/tablet.png?raw=true',
      addproduct : 0,
    },
    {
      name : 'Monitor',
      category : 'Monitores',
      price : 150,
      quantity : 0,
      image : 'https://github.com/segundo8/tp_angular/blob/main/src/assets/img/monitor.jpg?raw=true',
      addproduct : 0,
    }
  ];

  constructor(private cart: TecnoworldCartService) {
  }

  addArticle(article: Article): void{
    this.cart.addArticle(article);
    article.quantity -= article.addproduct;
    article.addproduct = 0;
  }
 
  upProduct(article: Article): void {
    if (article.quantity > article.addproduct)
      article.addproduct++;
  }

  downProduct(article: Article): void {
    if (article.addproduct > 0)
      article.addproduct--;
  }

}