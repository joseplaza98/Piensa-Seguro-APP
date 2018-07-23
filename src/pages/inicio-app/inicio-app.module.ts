import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioAppPage } from './inicio-app';

@NgModule({
  declarations: [
    InicioAppPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioAppPage),
  ],
})
export class InicioAppPageModule {}
