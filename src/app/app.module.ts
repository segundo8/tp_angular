import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CartComponent } from './cart/cart.component';
import { TecnoworldHomeComponent } from './tecnoworld-home/tecnoworld-home.component';
import { TecnoworldAboutComponent } from './tecnoworld-about/tecnoworld-about.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    CartComponent,
    TecnoworldHomeComponent,
    TecnoworldAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
