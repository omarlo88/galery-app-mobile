import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Place } from "../model/model.place";

@Injectable()
export class PlacesService {

    constructor(public toastCtrl: ToastController, private storage:Storage) {}

    private places:Array<Place> = [];

    addPlace(p: Place){
        this.places.push(p);

        this.storage.set("places", this.places);

        let toast = this.toastCtrl.create({
            message: 'Place ajoutée',
            duration: 5000,
            position: 'bottom',
            closeButtonText: "Ok",
            showCloseButton: true
        });
        toast.present();
    }


    getPlaces(){
        return this.storage.get("places").then(data => {
            return this.places = data != null ? data : [];
            //return this.places;
        }).catch(error => {
            console.log('Error getting location', error);
            return [];
        });
    }
}
