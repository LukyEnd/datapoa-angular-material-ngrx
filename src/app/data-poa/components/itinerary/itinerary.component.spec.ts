// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import {
//   ActivatedRoute,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlSegment,
//   UrlSegmentGroup,
//   convertToParamMap,
// } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { MockStore, provideMockStore } from '@ngrx/store/testing';
// import { initialState } from 'src/app/store/reducers/change-theme.reducer';
// import { AppState } from 'src/app/store/state/app.state';
// import { ItineraryComponent } from './itinerary.component';
// import { RouterTestingModule } from '@angular/router/testing';

// fdescribe('ItineraryComponent', () => {
//   let component: ItineraryComponent;
//   let fixture: ComponentFixture<ItineraryComponent>;
//   let store: MockStore<AppState>;

//   const fakeActivatedRoute = {
//     snapshot: { data: {} },
//   } as ActivatedRoute;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ItineraryComponent],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       providers: [
//         provideMockStore({ initialState }),
//         ActivatedRouteSnapshot,
//         RouterStateSnapshot,
//         UrlSegment,
//         UrlSegmentGroup,
//         Store,
//         // { provide: ActivatedRoute, useValue: fakeActivatedRoute },
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             snapshot: {
//               queryParamMap: {
//                 get(): number {
//                   return 6;
//                 },
//               },
//             },
//           },
//         },
//       ],
//       imports: [RouterTestingModule],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ItineraryComponent);
//     component = fixture.componentInstance;
//     store = TestBed.inject(MockStore);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
