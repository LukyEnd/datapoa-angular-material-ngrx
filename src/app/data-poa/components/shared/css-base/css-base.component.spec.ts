import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CssBaseComponent } from './css-base.component';

describe('CssBaseComponent', () => {
  let component: CssBaseComponent;
  let fixture: ComponentFixture<CssBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssBaseComponent);
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
