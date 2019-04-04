import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { MeteoService } from "../../services/services.meteoService";
/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {

    private resultat: any;
    private mode = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams,
        public meteoService: MeteoService, public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }

  setMode(){
      this.mode = 1;}

  onGetMeteo(dataForm){
      //console.log(dataForm);
      let loading = this.loadingCtrl.create({
          content: 'Chargement des données...',
          duration: 1000
      });
      loading.present();
      this.meteoService.getMeteo(dataForm.nomVille).subscribe(data =>{
          console.log(data);
          this.resultat = data;
          if(this.resultat.list.lenght !=0){
              this.mode = 1;
              loading.dismiss();
          } else {
              this.mode = 2;
          }

      }, err =>{ console.log(err); this.mode = 2;});

  }

}
