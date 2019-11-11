import { Injectable } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { Observation } from '../../models/observations/observation';
import { AppData } from '../../models/app/appdata';
import { AppDataProvider } from '../appdata/appdata-provider';

declare var require: any;

@Injectable()
export class ObservationProvider {

  constructor(private appDataProvider: AppDataProvider) {}

  getAllObservations() : Promise<any> {
    return this.appDataProvider.getAppData()
      .then(
        (appData) => {
          return Promise.resolve(appData.getObservations());
        });
  }

  saveObservation(observation: Observation) : Promise<any> {
    return this.appDataProvider.getAppData()
      .then(
        (appData) => {
          if (observation.uuid == undefined) {
            // get uuid, https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            const uuidv1 = require('uuid/v1');
            observation.uuid = uuidv1();
            observation.timestamp = new Date();
            appData.addObservation(observation);
          } else {
            appData.updateObservation(observation);
          }
          return this.appDataProvider.saveAppData(appData)
            .then(
              () => {
              return Promise.resolve(observation);
            });
        });
  }

  getObservation(uuid: string) : Promise<any> {
    return this.appDataProvider.getAppData()
      .then(
        (appData) => {
          return Promise.resolve(appData.getObservationByUuid(uuid));
        });
  }

}
