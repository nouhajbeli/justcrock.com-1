import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToprecetteComponent } from './toprecette.component';

describe('ToprecetteComponent', () => {
  let component: ToprecetteComponent;
  let fixture: ComponentFixture<ToprecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToprecetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToprecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
