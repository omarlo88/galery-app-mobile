import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GaleryPage } from "../pages/galery/galery";
import { MeteoPage } from "../pages/meteo/meteo";
import { PlacesPage } from "../pages/places/places";
import { DetailImagePage } from "../pages/detail-image/detail-image";
import { GaleryService } from "../services/services.galeryService";
import { MeteoService } from "../services/services.meteoService";
import { PlacesService } from "../services/services.placesService";
import { NewPlacePage } from "../pages/new-place/new-place";
import { DetaiPlacePage } from "../pages/detai-place/detai-place";

@NgModule({
  declarations: [
    MyApp, DetaiPlacePage,
    HomePage, GaleryPage, MeteoPage, PlacesPage, DetailImagePage, NewPlacePage
  ],
  imports: [
    BrowserModule, FormsModule,
    IonicModule.forRoot(MyApp), HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'dbPlaces',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWcMOxn0Bhuc032GbeiX9uwod-MEdlNWg'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, DetaiPlacePage,
    HomePage, GaleryPage, MeteoPage, PlacesPage, DetailImagePage, NewPlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    GaleryService,
    MeteoService, PlacesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
