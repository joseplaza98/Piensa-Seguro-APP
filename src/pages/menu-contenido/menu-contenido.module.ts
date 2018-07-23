import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuContenidoPage } from './menu-contenido';

@NgModule({
  declarations: [
    MenuContenidoPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuContenidoPage),
  ],
})
export class MenuContenidoPageModule {}
