import { Injectable } from '@angular/core';
import { MOCKSPINOFFS } from './MOCKSPINOFFS';
import { Spinoff } from './spinoffs.model';

@Injectable({
  providedIn: 'root'
})
export class SpinoffsService {
  spinoffs: Spinoff[] = []

  constructor() {
    this.spinoffs = MOCKSPINOFFS;
  }

  getSpinoffs(): Spinoff[] {
    return this.spinoffs.slice();
  }

  getOneSpinoff(id: number): Spinoff {
    return this.spinoffs[id];
  }
}
