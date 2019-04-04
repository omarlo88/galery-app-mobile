import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, GESTURE_REFRESHER } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


import { GaleryService } from "../../services/services.galeryService";
import { DetailImagePage } from "../detail-image/detail-image";
/**
 * Generated class for the GaleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galery',
  templateUrl: 'galery.html',
})
export class GaleryPage {

    private nomVille: string ="";
    private size: number = 5;
    private pageActuelle: number = 1;
    private listePhotos:any = {hits:[]};
    private nombrePages:number;
    private mode = 1;
    private resData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public galeryService: GaleryService,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleryPage');
  }

  setMode(){
      this.mode = 1;}

  onRecherche(){
      this.mode = 1;
      this.listePhotos.hits = [];
      this.doRecherche();
  }

  doRecherche(){
      let loading = this.loadingCtrl.create({
          content: 'Chargement des données...',
          duration: 1000
      });
      loading.present();
      this.galeryService.getListeGaleries(this.nomVille, this.size, this.pageActuelle)
        .subscribe(data =>{
            console.log(data);
            //this.listePhotos = data;
            this.resData = data;
            if(this.resData.totalHits !=0){
                this.mode = 1;
                this.nombrePages = this.resData.totalHits / this.size;
                if(this.nombrePages % this.size != 0){
                    this.nombrePages = Math.trunc(this.nombrePages);
                    ++this.nombrePages;
                }
                this.resData.hits.forEach(h =>{
                    this.listePhotos.hits.push(h);
                });
                loading.dismiss();
            } else {
                this.mode = 2;
            }
        }, err =>{ console.log(err); this.mode = 2;});

  }

  doInfinite(infinite){
      //console.log(infinite);
      if(this.pageActuelle < this.nombrePages){
          ++this.pageActuelle;
          this.doRecherche();
          infinite.complete();
      }
  }

  onDetailImage(p){
      this.navCtrl.push(DetailImagePage, {myPhoto: p});
  }

}
