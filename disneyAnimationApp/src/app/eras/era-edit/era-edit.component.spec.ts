import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraEditComponent } from './era-edit.component';

describe('EraEditComponent', () => {
  let component: EraEditComponent;
  let fixture: ComponentFixture<EraEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EraEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
