import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemanagerComponent } from './updatemanager.component';

describe('UpdatemanagerComponent', () => {
  let component: UpdatemanagerComponent;
  let fixture: ComponentFixture<UpdatemanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
