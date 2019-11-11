import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observation } from '../../models/observations/observation';
import { ObservationProvider } from '../../providers/observations/observation-provider';

@Component({
  selector: 'app-create-observation',
  templateUrl: './create-observation.page.html',
  styleUrls: ['./create-observation.page.scss'],
})
export class CreateObservationPage implements OnInit {

  public observation: Observation;

  constructor(
    private router: Router,
    private observationProvider: ObservationProvider) {}

  ngOnInit() {
    this.observation = new Observation();
  }

  createObservation() {
    this.observationProvider.saveObservation(this.observation)
      .then(
        (savedObservation) => {
          this.observation = new Observation();
          this.router.navigate(["/list-of-observations"]);
        });
  }

  cancel() {
    this.observation = new Observation();
    this.router.navigate(["/list-of-observations"]);
  }
}
