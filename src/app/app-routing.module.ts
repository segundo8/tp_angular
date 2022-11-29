import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnoworldAboutComponent } from './tecnoworld-about/tecnoworld-about.component';
import { TecnoworldHomeComponent } from './tecnoworld-home/tecnoworld-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: TecnoworldHomeComponent
  },
  {
    path: 'about',
    component: TecnoworldAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
