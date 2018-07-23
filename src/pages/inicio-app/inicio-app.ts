import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroduccionPage } from '../introduccion/introduccion';
import { PropositoPage } from '../proposito/proposito';
import { AcercaDePage } from '../acerca-de/acerca-de';
import { MenuContenidoPage } from '../menu-contenido/menu-contenido';

/**
 * Generated class for the InicioAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-app',
  templateUrl: 'inicio-app.html',
})
export class InicioAppPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aIntroduccion() {
    this.navCtrl.push(IntroduccionPage);

  }

  aProposito() {
    this.navCtrl.push(PropositoPage);

  }

  aMenuContenido() {
    this.navCtrl.push(MenuContenidoPage);

  }

  aAcercaDe() {
    this.navCtrl.push(AcercaDePage);

  }

  slides = [
    {
      image: "assets/img/hGhxr60THCg5aUUIo4dz_Logo2.jpg"
    },

    {
      image: "assets/img/o2AhXqIVSmyM9VM5yfKf_fondos-de-pantalla-para-programadores-BinaryCodeWallpaper.jpg"
    },

    {
      image: "assets/img/65SzGORET2BRvAlahKW1_getImage1.jpg"
    },

    {
      image: "assets/img/qUb4JXG0TyYUTaFMWIVg_386b0468204388f7fbee894147d6012c.jpg"
    }
  ];





  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioAppPage');
  }



}
