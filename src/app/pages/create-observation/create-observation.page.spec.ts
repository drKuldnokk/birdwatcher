import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { CreateObservationPage } from './create-observation.page';
import { routes } from '../../app-routing.module';
import { ObservationProvider } from '../../providers/observations/observation-provider';
import { AppDataProvider } from '../../providers/appdata/appdata-provider';

describe('CreateObservationPage', () => {
  let component: CreateObservationPage;
  let fixture: ComponentFixture<CreateObservationPage>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [ CreateObservationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        ObservationProvider,
        AppDataProvider,
        NativeStorage,
      ],
    })
    .compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
