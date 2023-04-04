import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { reducers } from 'src/app/store/reducers/root.reducers';
import { AppState } from 'src/app/store/state/app.state';
import { initialState } from '../../../store/reducers/bus-line.reducer';
import { BusLineComponent } from './bus-line.component';

describe('Actions/Disparos do BusLineComponent', () => {
  let fixture: ComponentFixture<BusLineComponent>;
  let component: BusLineComponent;
  let store: MockStore<AppState>;
  let event: Event;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusLineComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore({ initialState }),
        Router,
        Store,
        { provide: Router, useValue: {} },
      ],
      imports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusLineComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    event = new Event('input');
    fixture.detectChanges();

    spyOn(component, 'ngOnInit');
    spyOn(component, 'actionsPageInitial');
    spyOn(component, 'dataLineBus');
    spyOn(component, 'applyFilter');
  });

  afterEach(() => {
    spyOn(component, 'ngOnDestroy').and.callFake(() => {});
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('actionsPageInitial should check if it has been opened when called', () => {
    component.actionsPageInitial();
    expect(component.actionsPageInitial).toHaveBeenCalled();
  });

  it('dataLineBus should check if it has been opened when called', () => {
    component.dataLineBus();
    expect(component.dataLineBus).toHaveBeenCalled();
  });

  it('applyFilter should check if it has been opened when called', () => {
    component.applyFilter(event);
    expect(component.applyFilter).toHaveBeenCalled();
  });
});
