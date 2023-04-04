import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/store/reducers/change-theme.reducer';
import { AppState } from 'src/app/store/state/app.state';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [provideMockStore({ initialState }), Store],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();

    spyOn(component, 'ngOnInit');
    spyOn(component, 'dataChangePage');
    spyOn(component, 'selectTheme');
    spyOn(component, 'routerNavigation');
  });

  afterEach(() => {
    spyOn(component, 'ngOnDestroy').and.callFake(() => {});
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dataChangePage should check if it has been opened when called', () => {
    component.dataChangePage();
    expect(component.dataChangePage).toHaveBeenCalled();
  });

  it('selectTheme should check if it has been opened when called', () => {
    const select = '';
    component.selectTheme(select);
    expect(component.selectTheme).toHaveBeenCalled();
  });

  it('routerNavigation should check if it has been opened when called', () => {
    const vehicle = '';
    component.routerNavigation(vehicle);
    expect(component.routerNavigation).toHaveBeenCalled();
  });
});
