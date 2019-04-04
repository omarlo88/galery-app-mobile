import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlacesService } from "../../services/services.placesService";
import { Place } from "../../model/model.place";
import { NewPlacePage } from "../new-place/new-place";
import { DetaiPlacePage } from "../detai-place/detai-place";

/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

    private places:Array<Place>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private placesService: PlacesService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  ionViewWillEnter(){
      this.placesService.getPlaces().then(data =>{
          this.places = data;
      }).catch(error => {
          console.log('Error getting location', error);
      });
  }

  onNewPlace(){
      this.navCtrl.push(NewPlacePage);
  }

  onDetailPlace(p: Place){
      this.navCtrl.push(DetaiPlacePage, {"place": p});
  }

}
