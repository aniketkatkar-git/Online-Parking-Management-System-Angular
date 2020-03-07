import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwnerComponent } from './create-owner.component';

describe('CreateOwnerComponent', () => {
  let component: CreateOwnerComponent;
  let fixture: ComponentFixture<CreateOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
