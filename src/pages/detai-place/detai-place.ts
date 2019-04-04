import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Place } from "../../model/model.place";
/**
 * Generated class for the DetaiPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detai-place',
  templateUrl: 'detai-place.html',
})
export class DetaiPlacePage {

    private place: Place;
    private photo:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
        public alertCtrl: AlertController, private camera: Camera) {
      this.place = this.navParams.get("place");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetaiPlacePage');
  }

  onTakePicture(){
      const option1: CameraOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: this.camera.PictureSourceType.CAMERA,
          allowEdit: true,
          targetWidth: 320,
          targetHeight: 240
      };
      const option2: CameraOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          allowEdit: true,
          targetWidth: 320,
          targetHeight: 240
      };

      let alert = this.alertCtrl.create({
          title: 'Source',
          message: 'Choisisez la source!!',
          buttons: [
              { text: 'Caméra', handler: () => { this.takePicture(option1);}},
              { text: 'Librairie', handler: () => { this.takePicture(option2);}}
          ]
      });
      alert.present();
  }

  takePicture(option){
      this.camera.getPicture(option).then(imageData => {
          this.photo = 'data:image/jpeg;base64,' + imageData;
      }, err => {
          console.log("impossible de prendre une photo", err);
      });
  }

}
