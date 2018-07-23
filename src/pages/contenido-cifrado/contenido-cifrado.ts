import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TalleresCifradoPage } from '../talleres-cifrado/talleres-cifrado';
import { TemaCifradoPage } from '../tema-cifrado/tema-cifrado';

/**
 * Generated class for the ContenidoCifradoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contenido-cifrado',
  templateUrl: 'contenido-cifrado.html',
})
export class ContenidoCifradoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aTemaCifrado() {
    this.navCtrl.push(TemaCifradoPage);

  }

  aTalleresCifrado() {
    this.navCtrl.push(TalleresCifradoPage);

  }



  slides = [
    {

      image: "assets/img/fviAe4kPRZS2lbyltcwu_descarga2.jpg"
    },

    {
      image: "assets/img/Ew9zKcsPRD2r8K6O9YeL_Elementosvulnerables.jpg"
    },

    {
      image: "assets/img/B7FthsqRdagjez2KqSAd_SeguridadFisica.jpg"
    },

  ];


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContenidoCifradoPage');
  }

}
