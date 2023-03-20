import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinoffsComponent } from './spinoffs.component';

describe('SpinoffsComponent', () => {
  let component: SpinoffsComponent;
  let fixture: ComponentFixture<SpinoffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinoffsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinoffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
