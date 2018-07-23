import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PropositoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proposito',
  templateUrl: 'proposito.html',
})
export class PropositoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  slides = [
    {
      image: "assets/img/Ai5WHYczSneN97xdtqJz_Propo1.jpg"
    },

    {
      image: "assets/img/klqgto5JRqDwlBQvXiAJ_Propo2.jpg"
    },

    {
      image: "assets/img/2IZ878dARyCsGvl6atQl_Propo3.jpg"
    }

  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropositoPage');
  }

}
