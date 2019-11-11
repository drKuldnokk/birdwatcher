import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observation } from '../../models/observations/observation';
import { ObservationProvider } from '../../providers/observations/observation-provider';

@Component({
  selector: 'observation-detail',
  templateUrl: 'observation-detail.page.html',
  styleUrls: ['observation-detail.page.scss'],
})
export class ObservationDetailPage implements OnInit {

  private observations: Array<Observation>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private observationProvider: ObservationProvider) {}

  ngOnInit() {
    console.log("ngOnInit");
    this.activatedRoute.params.subscribe(params => {
      console.log(params['uuid']);
      this.observationProvider.getObservation(params['uuid'])
        .then(
          (observation) => {
            // TODO
            this.observations = new Array<Observation>();
            this.observations.push(observation);
          }
        );
    });
  }
}
