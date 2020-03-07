import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcityComponent } from './allcity.component';

describe('AllcityComponent', () => {
  let component: AllcityComponent;
  let fixture: ComponentFixture<AllcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
