import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TemaSiPage } from '../tema-si/tema-si';
import { TalleresSiPage } from '../talleres-si/talleres-si';

/**
 * Generated class for the ContenidoSiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contenido-si',
  templateUrl: 'contenido-si.html',
})
export class ContenidoSiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aTemaSI() {
    this.navCtrl.push(TemaSiPage);

  }

  aTalleresSI() {
    this.navCtrl.push(TalleresSiPage);

  }



  slides = [
    {

      image: "assets/img/ArK46MMITXiu0qenY2dZ_maxresdefault.jpg"
    },

    {
      image: "assets/img/ngQi6MOCQ5u32HykMtQY_getImage18.jpg"
    },

    {
      image: "assets/img/CKg0ODLR7yKOQwBsGCEG_getImage4.jpg"
    },

  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContenidoSiPage');
  }

}
