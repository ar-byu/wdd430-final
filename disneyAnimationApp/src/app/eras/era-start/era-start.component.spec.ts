import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraStartComponent } from './era-start.component';

describe('EraStartComponent', () => {
  let component: EraStartComponent;
  let fixture: ComponentFixture<EraStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EraStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EraStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
