import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraDetailComponent } from './era-detail.component';

describe('EraDetailComponent', () => {
  let component: EraDetailComponent;
  let fixture: ComponentFixture<EraDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EraDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
