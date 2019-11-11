import { AppData } from './appdata';
import { Observation } from '../observations/observation';

describe('AppData', () => {

  let appData: AppData;

  beforeEach(async() => {
    appData = new AppData();
  });

  it(`when new observation is added
    it should be contained in array of all observations`, () => {

    appData.addObservation({
      uuid: "dummy_uuid",
      timestamp: new Date(),
      species: 'Roadrunner',
      rarity: 'rare',
      notes: 'This is a fast bird'
    });

    let savedObservation: Observation = appData.getObservations()[0];
    expect(savedObservation.uuid).toEqual("dummy_uuid");
  });

  it(`when observations are requested
    all added observations should be returned`, () => {

    appData.addObservation({
      uuid: "dummy_uuid_1",
      timestamp: new Date(),
      species: 'Roadrunner',
      rarity: 'rare',
      notes: 'This is a fast bird'
    });
    appData.addObservation({
      uuid: "dummy_uuid_2",
      timestamp: new Date(),
      species: 'Roadrunner',
      rarity: 'rare',
      notes: 'This is a fast bird'
    });
    appData.addObservation({
      uuid: "dummy_uuid_3",
      timestamp: new Date(),
      species: 'Roadrunner',
      rarity: 'rare',
      notes: 'This is a fast bird'
    });

    expect(appData.getObservations().length).toEqual(3);
  });

  it(`empty array should be returned when no observations exist`, () => {
    expect(appData.getObservations().length).toEqual(0);
  });

  it(`should serialize to json`, () => {
    appData.addObservation({
      uuid: "dummy_uuid_3",
      timestamp: new Date("2019-11-11T02:10:52.100Z"),
      species: 'Roadrunner',
      rarity: 'rare',
      notes: 'This is a fast bird'
    });
    appData.addObservation({
      uuid: "dummy_uuid_4",
      timestamp: new Date("2019-11-11T02:10:52.100Z"),
      species: 'Roadrunner',
      rarity: 'rare',
      notes: 'This is a fast bird'
    });
    expect(appData.toJson()).toEqual(
      '{' +
      '"dummy_uuid_3":{"uuid":"dummy_uuid_3","timestamp":"2019-11-11T02:10:52.100Z","species":"Roadrunner","rarity":"rare","notes":"This is a fast bird"},' +
      '"dummy_uuid_4":{"uuid":"dummy_uuid_4","timestamp":"2019-11-11T02:10:52.100Z","species":"Roadrunner","rarity":"rare","notes":"This is a fast bird"}' +
      '}'
    );
  });

  it(`should deserialize from json`, () => {
    appData.fromJson(
      '{' +
      '"dummy_uuid_3":{"uuid":"dummy_uuid_3","timestamp":"2019-11-11T02:10:52.100Z","species":"Roadrunner","rarity":"rare","notes":"This is a fast bird"},' +
      '"dummy_uuid_4":{"uuid":"dummy_uuid_4","timestamp":"2019-11-11T02:10:52.100Z","species":"Roadrunner","rarity":"rare","notes":"This is a fast bird"}' +
      '}');
      
      expect(appData.getObservations().length).toEqual(2);

      let observation: Observation = appData.getObservations()[0];
      expect(observation.uuid).toEqual("dummy_uuid_3");
      // TODO timestamp serialization
      //expect(observation.timestamp).toEqual(new Date("2019-11-11T02:10:52.100Z"));
      expect(observation.species).toEqual('Roadrunner');
      expect(observation.rarity).toEqual('rare');
      expect(observation.notes).toEqual('This is a fast bird');

      observation = appData.getObservations()[1];
      expect(observation.uuid).toEqual("dummy_uuid_4");
  });
});
