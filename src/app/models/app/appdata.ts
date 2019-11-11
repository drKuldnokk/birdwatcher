import { Observation } from '../observations/observation';

export class AppData {

  public observations: Map<string, Observation> = new Map<string, Observation>();

  constructor() {}

  public addObservation(observation: Observation) {
    this.observations.set(observation.uuid, observation);
  }

  public updateObservation(observation: Observation) {
    this.observations.set(observation.uuid, observation);
  }

  public getObservationByUuid(uuid: string) {
    return this.observations.get(uuid);
  }

  public getObservations() : Array<Observation> {
    let arrayOfObservations: Array<Observation> = Array.from(this.observations.values());
    arrayOfObservations.sort((observation1, observation2) => {
      if (observation1.timestamp > observation2.timestamp) {
        return -1;
      }
      if (observation1.timestamp < observation2.timestamp) {
        return 1;
      }
      return 0;
    });
    return arrayOfObservations;
  }

  public toJson() : string {
    let observationsJsonObject = {};
    this.observations.forEach((value, key) => {
      observationsJsonObject[key] = value;
    });
    return JSON.stringify(observationsJsonObject);
  }

  public fromJson(jsonString: string) {
    let jsonObject = JSON.parse(jsonString);
    for (var value in jsonObject) {
      this.observations.set(value, jsonObject[value]);
    }
  }
}
