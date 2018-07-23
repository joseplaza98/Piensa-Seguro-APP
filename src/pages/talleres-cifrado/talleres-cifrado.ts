import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TalleresCifradoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-talleres-cifrado',
  templateUrl: 'talleres-cifrado.html',
})
export class TalleresCifradoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slides = [
    {
      image: "assets/img/qNTws13lTJesFHawuUDF_talleress1.png"
    },

    {
      image: "assets/img/7ZoF3G2DTqyModMuAy3h_talleres2.jpg"
    },

    {
      image: "assets/img/sHpPnnohSeCl8umD5fAQ_talleres3.png"
    },

  ];


  ionViewDidLoad() {
    console.log('ionViewDidLoad TalleresCifradoPage');
  }

}
