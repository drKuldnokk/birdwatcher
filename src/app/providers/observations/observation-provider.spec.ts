import { ObservationProvider } from './observation-provider';
import { AppDataProvider } from '../appdata/appdata-provider';
import { MockNativeStorage } from '../../mocks/mock-native-storage';
import { Observation } from '../../models/observations/observation';

describe('ObservationsProvider', () => {

  let observationProvider: ObservationProvider;
  let appDataProvider: AppDataProvider;

  beforeEach(async() => {
    appDataProvider = new AppDataProvider(new MockNativeStorage());
    observationProvider = new ObservationProvider(appDataProvider);
  });

  it(`when no observations exists
    and all observations are requested
    a promise with empty array is returned`, (done) => {

    observationProvider.getAllObservations()
      .then(
        (arrayOfObservations) => {
          expect(arrayOfObservations.length).toEqual(0);
          done();
        }
      )
  });

  it(`when observation is added
    and all observations are requested
    a promise with previously saved observation should be returned`, (done) => {

    observationProvider.saveObservation({
      species: 'some species',
      rarity: 'common',
      notes: 'some notes',
      uuid: 'dummykey',
      timestamp: new Date(),
    }).then(
      () => {
        observationProvider.getAllObservations()
          .then(
            (arrayOfObservations) => {
              expect(arrayOfObservations.length).toEqual(1);
              done();
            });
      });
  });

  it(`when observation is saved
    a promise with saved observation should be returned`, (done) => {

    observationProvider.saveObservation({
      species: 'some species',
      rarity: 'common',
      notes: 'some notes',
      uuid: 'dummykey',
      timestamp: new Date(),
    }).then(
      (observation) => {
        expect(observation.uuid).toEqual("dummykey");
        done();
      });
  });

  it(`when existing observation is saved
    a promise with updated observation should be returned`, (done) => {

    observationProvider.saveObservation({
      species: 'some species',
      rarity: 'common',
      notes: 'some notes',
      uuid: 'dummykey',
      timestamp: new Date(),
    }).then(
      (observation) => {
        observation.species = "updated species";
        observationProvider.saveObservation(observation)
          .then(
            (updatedObservation) => {
              expect(updatedObservation.species).toEqual("updated species");
              done();
            });

      });
  });

  it(`when new observation is saved
    a new uuid should be generated`, (done) => {

    let newObservation: Observation = new Observation();
    observationProvider.saveObservation(newObservation)
      .then(
        (observation) => {
          expect(observation.uuid).not.toEqual(undefined);
          expect(observation.uuid).not.toEqual("");
          done();
        });
  });

  it(`when new observation is saved
    a timestamp should be generated`, (done) => {

    let newObservation: Observation = new Observation();
    observationProvider.saveObservation(newObservation)
      .then(
        (observation) => {
          expect(observation.timestamp).not.toEqual(undefined);
          done();
        });
  });

  it(`should return a single observation by uuid`, (done) => {

    let newObservation: Observation = new Observation();
    observationProvider.saveObservation(newObservation)
      .then(
        (savedObservation) => {
          observationProvider.getObservation(savedObservation.uuid)
            .then(
              (retrievedNewObservation) => {
                expect(retrievedNewObservation.uuid).toEqual(savedObservation.uuid);
                done();
              }
            );
        });
  });
});
