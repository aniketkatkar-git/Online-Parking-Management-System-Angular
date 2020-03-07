import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlluserComponent } from './alluser.component';

describe('AlluserComponent', () => {
  let component: AlluserComponent;
  let fixture: ComponentFixture<AlluserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlluserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
