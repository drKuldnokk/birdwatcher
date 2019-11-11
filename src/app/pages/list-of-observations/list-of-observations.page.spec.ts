import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { ListOfObservationsPage } from './list-of-observations.page';
import { ObservationProvider } from '../../providers/observations/observation-provider';
import { AppDataProvider } from '../../providers/appdata/appdata-provider';
import { routes } from '../../app-routing.module';

describe('ListOfObservationsPage', () => {
  let router: Router;
  let location: Location;
  let component: ListOfObservationsPage;
  let fixture: ComponentFixture<ListOfObservationsPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ListOfObservationsPage],
      imports: [
        IonicModule.forRoot(),
        CommonModule,
        RouterTestingModule.withRoutes(routes),
      ],
      providers: [
        ObservationProvider,
        AppDataProvider,
        NativeStorage,
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(ListOfObservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
