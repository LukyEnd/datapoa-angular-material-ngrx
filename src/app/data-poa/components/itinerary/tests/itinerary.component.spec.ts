import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { ItineraryComponent } from '../itinerary.component';

describe('ItineraryComponent', () => {
  let component: ItineraryComponent;
  let fixture: ComponentFixture<ItineraryComponent>;
  let store: Store<AppState>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItineraryComponent],
      imports: [StoreModule.forRoot({})],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '1' }) },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    activatedRoute = TestBed.inject(ActivatedRoute);

    spyOn(component, 'ngOnInit');
    spyOn(component, 'actionsPageInitial');
    spyOn(component, 'dataItinerary');
    spyOn(store, 'dispatch').and.callThrough();
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

  it('dataItinerary should check if it has been opened when called', () => {
    component.dataItinerary();
    expect(component.dataItinerary).toHaveBeenCalled();
  });
});
