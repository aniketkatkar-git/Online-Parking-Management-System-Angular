import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmanagerComponent } from './allmanager.component';

describe('AllmanagerComponent', () => {
  let component: AllmanagerComponent;
  let fixture: ComponentFixture<AllmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
