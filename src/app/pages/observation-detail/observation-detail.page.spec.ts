import { Observable } from "rxjs";

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, LocationStrategy } from '@angular/common';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { ObservationDetailPage } from './observation-detail.page';
import { routes } from '../../app-routing.module';
import { ObservationProvider } from '../../providers/observations/observation-provider';
import { AppDataProvider } from '../../providers/appdata/appdata-provider';

describe('ObservationDetailPage', () => {
  let component: ObservationDetailPage;
  let fixture: ComponentFixture<ObservationDetailPage>;
  let mockActivatedRoute;

  beforeEach(async() => {
    const mockParams = new Observable(function subscribe(subscriber) {
      subscriber.next({ uuid: "test" });
    });
    mockActivatedRoute = { params: mockParams };

    TestBed.configureTestingModule({
      declarations: [ObservationDetailPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        NativeStorage,
        ObservationProvider,
        AppDataProvider,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservationDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
