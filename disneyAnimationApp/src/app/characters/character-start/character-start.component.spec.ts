import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterStartComponent } from './character-start.component';

describe('CharacterStartComponent', () => {
  let component: CharacterStartComponent;
  let fixture: ComponentFixture<CharacterStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
