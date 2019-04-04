import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { GaleryPage } from "../pages/galery/galery";
import { MeteoPage } from "../pages/meteo/meteo";
import { PlacesPage } from "../pages/places/places";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    
  rootPage:any = HomePage;

  private menus = [
      {titre: "Accueil", component: HomePage},
      {titre: "Mes Galeries", component: GaleryPage},
      {titre: "Météo", component: MeteoPage},
      {titre: "Places", component: PlacesPage}

  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onPage(m){
      this.rootPage = m.component;
  }
}
