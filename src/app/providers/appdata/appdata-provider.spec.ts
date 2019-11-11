import { MockNativeStorage } from '../../mocks/mock-native-storage';
import { AppDataProvider } from './appdata-provider';
import { AppData } from '../../models/app/appdata';

describe('AppDataProvider', () => {

  let appDataProvider: AppDataProvider;
  let mockNativeStorage: MockNativeStorage;

  beforeEach(async() => {
    mockNativeStorage = new MockNativeStorage();
    appDataProvider = new AppDataProvider(mockNativeStorage);
  });

  it('should return promise with appdata when appdata is requested', (done) => {
    appDataProvider.getAppData()
      .then(
        (appData) => {
          expect(true).toBeTruthy();
          done();
        }
      );
  });

  it(`should add appdata to storage
    when appdata is requested for the first time`, (done) => {
    appDataProvider.getAppData()
      .then(
        (appData) => {
          expect(mockNativeStorage.data.has(appDataProvider.appDataKey)).toBeTruthy();
          done();
        }
      );
  });

  it(`should return promise with new appdata
    when appdata is requested for the first time`, (done) => {
    appDataProvider.getAppData()
      .then(
        (appData) => {
          expect(appData).toEqual(new AppData());
          done();
        }
      );
  });

  it(`should update appdata
    when appdata is saved`, (done) => {
    appDataProvider.getAppData()
      .then(
        (appData) => {
          appData.addObservation({
            uuid: "dummy_uuid",
            timestamp: new Date(),
            species: 'Roadrunner',
            rarity: 'rare',
            notes: 'This is a fast bird'
          });
          appDataProvider.saveAppData(appData)
            .then(
              () => {
                appDataProvider.getAppData()
                  .then(
                    (updatedAppData) => {
                      expect(updatedAppData.getObservations().length).toEqual(1);
                      done();
                    });
              });
        }
      );
  });

  it(`should retain many saved observations`, (done) => {
    appDataProvider.getAppData()
      .then(
        (appData) => {
          appData.addObservation({
            uuid: "dummy_uuid1",
            timestamp: new Date(),
            species: 'Roadrunner',
            rarity: 'rare',
            notes: 'This is a fast bird'
          });
          appDataProvider.saveAppData(appData)
            .then(
              () => {
                appDataProvider.getAppData()
                  .then(
                    (appData) => {
                      appData.addObservation({
                        uuid: "dummy_uuid2",
                        timestamp: new Date(),
                        species: 'Roadrunner',
                        rarity: 'rare',
                        notes: 'This is a fast bird'
                      });
                      appDataProvider.saveAppData(appData)
                        .then(
                          () => {
                            appDataProvider.getAppData()
                              .then(
                                (updatedAppData) => {
                                  expect(updatedAppData.getObservations().length).toEqual(2);
                                  done();
                                });
                            });
                      });
                });
      });
  });

});
