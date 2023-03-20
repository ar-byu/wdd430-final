import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinoffEditComponent } from './spinoff-edit.component';

describe('SpinoffEditComponent', () => {
  let component: SpinoffEditComponent;
  let fixture: ComponentFixture<SpinoffEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinoffEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinoffEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
