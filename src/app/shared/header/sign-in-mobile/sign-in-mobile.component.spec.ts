import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInMobileComponent } from './sign-in-mobile.component';

describe('SignInMobileComponent', () => {
  let component: SignInMobileComponent;
  let fixture: ComponentFixture<SignInMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SignInMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
