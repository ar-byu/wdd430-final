import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStartComponent } from './movie-start.component';

describe('MovieStartComponent', () => {
  let component: MovieStartComponent;
  let fixture: ComponentFixture<MovieStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
