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
import { ConsultApiService } from 'src/app/data-poa/services/consult-api.service';
import { initialState } from '../../reducers/change-theme.reducer';
import { BusLineEffects } from '../bus-line.effects';

describe('BusLineEffects', () => {
  let actions$: Observable<any>;
  let effects: BusLineEffects;
  let consultApiService: ConsultApiService;
  let httpMock: HttpTestingController;
  let httpTest: HttpClient;

  const customBusLineDetail = [{ id: 22, codigo: 'string', nome: 'string' }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        { provide: APP_BASE_HREF, useValue: '/' },
        ConsultApiService,
        Store,
        BusLineEffects,
        provideMockStore({
          initialState,
        }),
      ],
      imports: [HttpClientTestingModule],
    });

    consultApiService = TestBed.inject(ConsultApiService);
    httpMock = TestBed.inject(HttpTestingController);
    httpTest = TestBed.inject(HttpClient);
    effects = TestBed.inject(BusLineEffects);

    spyOn(consultApiService, 'apiBusLine').and.returnValue(of());
    actions$ = of({ address: 1 });
  });

  it('should call loadBusLines()', () => {
    effects.loadBusLines$.subscribe((action) => {
      expect(action).toEqual({
        type: '[BusLine] Load BusLine Success',
        busLineData: customBusLineDetail,
      });
    });
  });
});
