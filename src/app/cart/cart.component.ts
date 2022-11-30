import { Component } from '@angular/core';
import { Article } from '../articles-list/articles';
import { TecnoworldCartService } from '../tecnoworld-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  cartList: Article[] = [];
  constructor(private cart: TecnoworldCartService) {
    cart.cartList.subscribe(c => this.cartList = c);
  }
}
