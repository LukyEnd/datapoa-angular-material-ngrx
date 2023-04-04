import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { ConsultItineraryService } from 'src/app/data-poa/services/consult-itinerary.service';
import { initialState } from '../../reducers/change-theme.reducer';
import { BusItineraryEffects } from '../bus-itinerary.effects';

describe('BusItinerary', () => {
  let actions$: Observable<any>;
  let effects: BusItineraryEffects;
  let consultItineraryService: ConsultItineraryService;
  let httpMock: HttpTestingController;
  let httpTest: HttpClient;

  const customCoordinates = [{ lat: '2020', lng: '0222' }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        { provide: APP_BASE_HREF, useValue: '/' },
        ConsultItineraryService,
        Store,
        BusItineraryEffects,
        provideMockStore({
          initialState,
        }),
      ],
      imports: [HttpClientTestingModule],
    });

    consultItineraryService = TestBed.inject(ConsultItineraryService);
    httpMock = TestBed.inject(HttpTestingController);
    httpTest = TestBed.inject(HttpClient);
    effects = TestBed.inject(BusItineraryEffects);

    spyOn(consultItineraryService, 'setItinerary').and.returnValue(of());
    actions$ = of({ address: 1 });
  });

  it('should call loadBusItinerarys()', () => {
    effects.loadBusItinerarys$.subscribe((action) => {
      expect(action).toEqual({
        type: '[BusItinerary] Load BusItinerarys Success',
        infoBus: customCoordinates,
      });
    });
  });
});
