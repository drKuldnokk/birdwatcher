import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ObservationDetailPage } from './observation-detail.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ObservationDetailPage },
    ]),
  ],
  declarations: [ObservationDetailPage],
})
export class ObservationDetailPageModule {}
