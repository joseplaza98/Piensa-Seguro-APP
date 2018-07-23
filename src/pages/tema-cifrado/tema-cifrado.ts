import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TemaCifradoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema-cifrado',
  templateUrl: 'tema-cifrado.html',
})
export class TemaCifradoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slides = [
    {
      image: "assets/img/Ew9zKcsPRD2r8K6O9YeL_Elementosvulnerables.jpg"
    },

    {
      image: "assets/img/B7FthsqRdagjez2KqSAd_SeguridadFisica.jpg"
    },

  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemaCifradoPage');
  }

}
