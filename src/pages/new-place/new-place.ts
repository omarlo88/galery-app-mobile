import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { Place } from "../../model/model.place";
import { PlacesService } from "../../services/services.placesService";
/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

    private place: Place = new Place();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private placesService: PlacesService, private geolocation: Geolocation) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onAddPlace(p: Place){

      let options = {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0
      };

      console.log(p);
      p.location = {longitude: 0, latitude: 0};
      //p.timestamp = new Date();
      p.timestamp = new Date().getTime();

      this.geolocation.getCurrentPosition(options).then(resp => {
          console.log(resp.coords.latitude);
          console.log(resp.coords.longitude);
          p.location.longitude = resp.coords.longitude;
          p.location.latitude = resp.coords.latitude;
          this.doAddPlace(p);
      // }, error =>{
      //     console.log('Géolocation impossible!! Vérifiez votre connexion internet', error);
      //     p.location.longitude = 0;
      //     p.location.latitude = 0;
      //     this.doAddPlace(p);
      // });  //Façon de traiter l'erreur sans passer par catch

      }).catch(error => {
            console.log('Géolocation impossible!! Vérifiez votre connexion internet', error);
            p.location.longitude = 0;
            p.location.latitude = 0;
            this.doAddPlace(p);
      });
  }

  doAddPlace(p: Place){
      this.placesService.addPlace(p);
      this.navCtrl.pop();
  }


}
