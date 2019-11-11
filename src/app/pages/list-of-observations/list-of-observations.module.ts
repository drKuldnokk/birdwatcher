import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
//import { FormsModule } from '@angular/forms';*/
import { RouterModule } from '@angular/router';

import { ListOfObservationsPage } from './list-of-observations.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: ListOfObservationsPage },
    ]),
  ],
  declarations: [ListOfObservationsPage],
})
export class ListOfObservationsPageModule {}
