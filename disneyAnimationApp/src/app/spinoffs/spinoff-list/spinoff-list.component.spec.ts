import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinoffListComponent } from './spinoff-list.component';

describe('SpinoffListComponent', () => {
  let component: SpinoffListComponent;
  let fixture: ComponentFixture<SpinoffListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinoffListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinoffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
