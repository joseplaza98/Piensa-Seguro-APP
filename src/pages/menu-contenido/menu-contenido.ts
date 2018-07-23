import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContenidoSiPage } from '../contenido-si/contenido-si';
import { ContenidoCifradoPage } from '../contenido-cifrado/contenido-cifrado';

/**
 * Generated class for the MenuContenidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-contenido',
  templateUrl: 'menu-contenido.html',
})
export class MenuContenidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aContenidoSI() {
    this.navCtrl.push(ContenidoSiPage);

  }


  aContenidoCifrado() {
    this.navCtrl.push(ContenidoCifradoPage);

  }

  slides = [
    {

      image: "assets/img/ihH9SEQmmCQkrq64B3Qr_IntroduccionalaseguridadInformatica.jpg"
    },

    {
      image: "assets/img/lymMDknsTOquhlIvIVAG_Cifrado.jpg"
    },

    {
      image: "assets/img/sLhI3YgT2ykKLYrnjiW1_Certificadodigital.png"
    },

  ];




  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuContenidoPage');
  }


}
