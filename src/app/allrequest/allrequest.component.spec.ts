import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrequestComponent } from './allrequest.component';

describe('AllrequestComponent', () => {
  let component: AllrequestComponent;
  let fixture: ComponentFixture<AllrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
