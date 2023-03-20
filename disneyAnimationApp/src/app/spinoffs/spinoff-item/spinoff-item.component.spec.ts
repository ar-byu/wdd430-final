import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinoffItemComponent } from './spinoff-item.component';

describe('SpinoffItemComponent', () => {
  let component: SpinoffItemComponent;
  let fixture: ComponentFixture<SpinoffItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinoffItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinoffItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
