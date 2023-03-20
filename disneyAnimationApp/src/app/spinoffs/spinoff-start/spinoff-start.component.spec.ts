import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinoffStartComponent } from './spinoff-start.component';

describe('SpinoffStartComponent', () => {
  let component: SpinoffStartComponent;
  let fixture: ComponentFixture<SpinoffStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinoffStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinoffStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
