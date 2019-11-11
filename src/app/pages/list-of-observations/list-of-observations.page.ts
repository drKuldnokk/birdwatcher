import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ObservationProvider } from '../../providers/observations/observation-provider';
import { Observation } from '../../models/observations/observation';
import { ObservationDetailPage } from '../observation-detail/observation-detail.page';

@Component({
  selector: 'list-of-observations',
  templateUrl: 'list-of-observations.page.html',
  styleUrls: ['list-of-observations.page.scss'],
})
export class ListOfObservationsPage {

  observations: Array<Observation> = [];

  constructor(private observationProvider: ObservationProvider) {}

  ionViewWillEnter() {
    this.observationProvider.getAllObservations()
      .then(
        (arrayOfObservations) => {
          this.observations = arrayOfObservations;
        },
        (error) => {
          console.log(error)
        });
  }

}
