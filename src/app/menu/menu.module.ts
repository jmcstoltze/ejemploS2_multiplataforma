import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; // para rutear

import { IonicModule } from '@ionic/angular';

// import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

// se definen rutas
const routes: Routes = [
  {
    path: '',
    component: MenuPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes), // otro cambio
    
    //MenuPageRoutingModule
  ],
  exports: [MenuPage], // otro cambio
  declarations: [MenuPage]
})
export class MenuPageModule {}
