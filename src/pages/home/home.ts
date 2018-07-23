import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioAppPage } from '../inicio-app/inicio-app';
import { IntroduccionPage } from '../introduccion/introduccion';
import { AcercaDePage } from '../acerca-de/acerca-de';
import { MenuContenidoPage } from '../menu-contenido/menu-contenido';
import { PropositoPage } from '../proposito/proposito';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  otraPagina() {
    this.navCtrl.push(InicioAppPage);

  }

  mInicio() {
    this.navCtrl.push(InicioAppPage);

  }

  mIntroduccion() {
    this.navCtrl.push(IntroduccionPage);

  }

  mProposito() {
    this.navCtrl.push(PropositoPage);

  }

  mContenido() {
    this.navCtrl.push(MenuContenidoPage);

  }

  mAcercaDe() {
    this.navCtrl.push(AcercaDePage);

  }


  slides = [
    {
      title: "En beneficio de los estudiantes",
      description: "Piensa Seguro es una App dirigida a los estudiantes univeritarios de Unicomfacauca",
      observacion: "Desliza para obtener mas información",
      image: "assets/img/VCRXQIriTBCQ8DSlkVlc_images.jpg"
    },

    {
      title: "Objetivo de aprendizaje",
      description: "Piensa Seguro se desea enseñar metodos alternos de aprendizaje en materia de Seguridad Informática",
      observacion: "Desliza para obtener mas información",
      image: "assets/img/0o6osx53Qy6UfrT1SH2P_getImage3.jpg"
    },

    {
      title: "Resultados esperados",
      description: "Piensa Seguro como método alternativo de aprendizaje en la modalidad M-Learning",
      observacion: "Desliza para obtener mas información",
      image: "assets/img/Ew9zKcsPRD2r8K6O9YeL_Elementosvulnerables.jpg"
    }
  ];


}
