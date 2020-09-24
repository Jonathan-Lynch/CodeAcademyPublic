import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInTemplateComponent } from './sign-in-template.component';

describe('SignInTemplateComponent', () => {
  let component: SignInTemplateComponent;
  let fixture: ComponentFixture<SignInTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
