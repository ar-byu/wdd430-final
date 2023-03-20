import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinoffDetailComponent } from './spinoff-detail.component';

describe('SpinoffDetailComponent', () => {
  let component: SpinoffDetailComponent;
  let fixture: ComponentFixture<SpinoffDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinoffDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinoffDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
