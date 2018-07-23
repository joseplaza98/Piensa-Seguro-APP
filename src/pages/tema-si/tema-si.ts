import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TemaSiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema-si',
  templateUrl: 'tema-si.html',
})
export class TemaSiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    console.log('ionViewDidLoad TemaSiPage');
  }

}
