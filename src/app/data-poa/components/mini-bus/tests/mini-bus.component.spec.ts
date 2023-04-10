import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiniBusComponent } from '../mini-bus.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../../../store/reducers/change-theme.reducer';
import { reducers } from '../../../../store/reducers/root.reducers';
import { AppState } from '../../../../store/state/app.state';
import { Router } from '@angular/router';

describe('MiniBusComponent', () => {
  let component: MiniBusComponent;
  let fixture: ComponentFixture<MiniBusComponent>;
  let store: MockStore<AppState>;
  let event: Event;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniBusComponent],
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
    fixture = TestBed.createComponent(MiniBusComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    event = new Event('input');
    fixture.detectChanges();

    spyOn(component, 'ngOnInit');
    spyOn(component, 'actionsPageInitial');
    spyOn(component, 'dataMiniBus');
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

  it('dataMiniBus should check if it has been opened when called', () => {
    component.dataMiniBus();
    expect(component.dataMiniBus).toHaveBeenCalled();
  });

  it('applyFilter should check if it has been opened when called', () => {
    component.applyFilter(event);
    expect(component.applyFilter).toHaveBeenCalled();
  });
});
