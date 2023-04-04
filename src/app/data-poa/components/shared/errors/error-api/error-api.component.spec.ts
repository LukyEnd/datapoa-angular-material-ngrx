import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ErrorApiComponent } from './error-api.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorApiComponent', () => {
  let component: ErrorApiComponent;
  let fixture: ComponentFixture<ErrorApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorApiComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display the error message if there is no error', () => {
    component.busLineError = '';
    fixture.detectChanges();
    const errorMessageElement = fixture.debugElement.query(
      By.css('.error-message')
    );
    expect(errorMessageElement).toBeFalsy();
  });
});
