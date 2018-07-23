import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntroduccionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class IntroduccionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slides = [
    {
      image: "assets/img/DuqZ1w3RmyUE9lnr8LPw_appmovil.jpg"
    },

    {
      image: "assets/img/38YmOhzgRFGSxipqFVlw_Aprendizaje.jpg"
    },

    {
     image: "assets/img/3VJxojZnRVOSjE5U3Pd9_Mlearnning.jpg"
    },
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroduccionPage');
  }

}
