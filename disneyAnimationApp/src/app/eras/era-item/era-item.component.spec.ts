import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraItemComponent } from './era-item.component';

describe('EraItemComponent', () => {
  let component: EraItemComponent;
  let fixture: ComponentFixture<EraItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EraItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EraItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
