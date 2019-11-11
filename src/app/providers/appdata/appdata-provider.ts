import { Injectable } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppData } from '../../models/app/appdata';

@Injectable()
export class AppDataProvider {

  public appDataKey: string = "birdwatcher_appdata_83364a12-d226-4fa9-9d1a-548e0bd1e28e";

  constructor(private nativeStorage: NativeStorage) {}

  public getAppData() : Promise<any> {
    return this.nativeStorage.keys()
      .then(
        (arrayOfKeys) => {
          if (arrayOfKeys.includes(this.appDataKey)) {
            return this.nativeStorage.getItem(this.appDataKey)
              .then(
                (appDataJsonString) => {
                  let appData: AppData = new AppData();
                  appData.fromJson(appDataJsonString);
                  return Promise.resolve(appData);
                }
              )
          } else {
            let appData: AppData = new AppData();
            return this.saveAppData(appData)
              .then(
                () => {
                  return Promise.resolve(appData);
                }
              );
          }
        });
  }

  public saveAppData(appData: AppData) : Promise<any> {
    return this.nativeStorage.setItem(this.appDataKey, appData.toJson());
  }
}
