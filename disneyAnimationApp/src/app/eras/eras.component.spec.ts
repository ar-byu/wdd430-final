import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasComponent } from './eras.component';

describe('ErasComponent', () => {
  let component: ErasComponent;
  let fixture: ComponentFixture<ErasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
