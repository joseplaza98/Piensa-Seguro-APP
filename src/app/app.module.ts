import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { InicioAppPage } from '../pages/inicio-app/inicio-app';
import { IntroduccionPage } from '../pages/introduccion/introduccion';
import { PropositoPage } from '../pages/proposito/proposito';
import { MenuContenidoPage } from '../pages/menu-contenido/menu-contenido';

/**Primera sección: Contiene los temas, talleres y una dinámica  */
import { ContenidoSiPage } from '../pages/contenido-si/contenido-si';
import { TemaSiPage } from '../pages/tema-si/tema-si';
import { TalleresSiPage } from '../pages/talleres-si/talleres-si';

/**Segunda sección: Contiene los temas, talleres y una dinámica  */
import { ContenidoCifradoPage } from '../pages/contenido-cifrado/contenido-cifrado';

import { TemaCifradoPage } from '../pages/tema-cifrado/tema-cifrado';
import { TalleresCifradoPage } from '../pages/talleres-cifrado/talleres-cifrado';

import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InicioAppPage,
    IntroduccionPage,
    PropositoPage,
    MenuContenidoPage,
    ContenidoSiPage,
    TemaSiPage,
    TalleresSiPage,
    ContenidoCifradoPage,
    TemaCifradoPage,
    TalleresCifradoPage,
    AcercaDePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InicioAppPage,
    IntroduccionPage,
    PropositoPage,
    MenuContenidoPage,
    
    ContenidoSiPage,
    TemaSiPage,
    TalleresSiPage,

    ContenidoCifradoPage,
    TemaCifradoPage,
    TalleresCifradoPage,
    AcercaDePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
