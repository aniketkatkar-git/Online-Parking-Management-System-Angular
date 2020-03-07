import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfeedbackComponent } from './allfeedback.component';

describe('AllfeedbackComponent', () => {
  let component: AllfeedbackComponent;
  let fixture: ComponentFixture<AllfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
