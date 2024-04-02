import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; // para rutear

import { IonicModule } from '@ionic/angular';

// import { LogeadoPageRoutingModule } from './logeado-routing.module';

import { LogeadoPage } from './logeado.page';
import { MenuPageModule } from '../menu/menu.module';

// import { MenuPage } from '../menu/menu.page';

const routes: Routes = [
  {
    path: '',
    component: LogeadoPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MenuPageModule
    
    //LogeadoPageRoutingModule
  ],
  declarations: [LogeadoPage]
})

// export class MenuPageModule {}

export class LogeadoPageModule {}
