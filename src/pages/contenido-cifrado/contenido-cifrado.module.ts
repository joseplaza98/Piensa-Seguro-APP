import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContenidoCifradoPage } from './contenido-cifrado';

@NgModule({
  declarations: [
    ContenidoCifradoPage,
  ],
  imports: [
    IonicPageModule.forChild(ContenidoCifradoPage),
  ],
})
export class ContenidoCifradoPageModule {}
