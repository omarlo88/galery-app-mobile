import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetaiPlacePage } from './detai-place';

@NgModule({
  declarations: [
    DetaiPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(DetaiPlacePage),
  ],
})
export class DetaiPlacePageModule {}
