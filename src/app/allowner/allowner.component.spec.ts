import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllownerComponent } from './allowner.component';

describe('AllownerComponent', () => {
  let component: AllownerComponent;
  let fixture: ComponentFixture<AllownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
