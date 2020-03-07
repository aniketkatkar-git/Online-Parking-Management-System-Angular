import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemanagerComponent } from './homemanager.component';

describe('HomemanagerComponent', () => {
  let component: HomemanagerComponent;
  let fixture: ComponentFixture<HomemanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomemanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
