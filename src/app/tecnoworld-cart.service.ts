import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from './articles-list/articles';

@Injectable({
  providedIn: 'root'
})

export class TecnoworldCartService {

  private _cartList: Article[] = [];
  cartList: BehaviorSubject < Article[] > = new BehaviorSubject(this._cartList);

  constructor() { }

  addArticle(article: Article) {
    let item: Article = this._cartList.find((v1) => v1.name == article.name)!;
    if(!item) {
      this._cartList.push({... article});
    } else 
    {
      item.quantity += article.quantity;
    }

  console.log(this._cartList);
  this.cartList.next(this._cartList);

  }
}
