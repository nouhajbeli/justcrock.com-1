import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecetteComponent } from './addrecette.component';

describe('AddrecetteComponent', () => {
  let component: AddrecetteComponent;
  let fixture: ComponentFixture<AddrecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrecetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
