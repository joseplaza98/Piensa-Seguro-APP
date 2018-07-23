import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContenidoSiPage } from './contenido-si';

@NgModule({
  declarations: [
    ContenidoSiPage,
  ],
  imports: [
    IonicPageModule.forChild(ContenidoSiPage),
  ],
})
export class ContenidoSiPageModule {}
