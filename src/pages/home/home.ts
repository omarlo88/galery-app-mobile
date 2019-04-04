import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Contact } from "../../model/model.contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    private contact: Contact = new Contact(
        "Omar Lo", "omarlo88.omar@gmail.com", "assets/imgs/admin.jpg"
    );

  constructor(public navCtrl: NavController) {
      console.log(this.contact);
  }

}
