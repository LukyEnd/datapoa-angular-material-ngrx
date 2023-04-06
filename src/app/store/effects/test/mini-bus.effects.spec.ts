// import { TestBed } from '@angular/core/testing';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { MockStore, provideMockStore } from '@ngrx/store/testing';
// import { Observable } from 'rxjs';
// import { BusLineDetail } from 'src/app/data-poa/models/bus-line.model';
// import { ConsultApiService } from 'src/app/data-poa/services/consult-api.service';
// import { initialState } from '../../reducers/mini-bus.reducer';
// import { AppState } from '../../state/app.state';
// import { MiniBusEffects } from '../mini-bus.effects';

// describe('MiniBusEffects', () => {
//   let actions$: Observable<any>;
//   let effects: MiniBusEffects;
//   let mockStore: MockStore<AppState>;
//   let mockService: jasmine.SpyObj<ConsultApiService>;
//   const busLineDetail = [{ id: 1, codigo: '', nome: '' }];

//   beforeEach(() => {
//     const serviceSpy = jasmine.createSpyObj('ConsultApiService', [
//       'apiBusLine',
//     ]);
//     TestBed.configureTestingModule({
//       providers: [
//         MiniBusEffects,
//         provideMockStore({ initialState }),
//         provideMockActions(() => actions$),
//         { provide: ConsultApiService, useValue: serviceSpy },
//       ],
//     });

//     effects = TestBed.inject(MiniBusEffects);
//     mockStore = TestBed.inject(MockStore);
//     mockService = TestBed.inject(
//       ConsultApiService
//     ) as jasmine.SpyObj<ConsultApiService>;
//   });

//   it('should be created', () => {
//     expect(effects).toBeTruthy();
//   });

//   it('should call loadBusLines()', () => {
//     effects.miniBuss$.subscribe((action) => {
//       expect(action).toEqual({
//         type: '[MiniBus]Load MiniBus Success',
//         miniBusData: busLineDetail,
//       });
//     });
//   });
// });
