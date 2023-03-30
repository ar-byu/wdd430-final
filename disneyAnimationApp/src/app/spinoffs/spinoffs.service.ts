import { Injectable } from '@angular/core';
import { MOCKSPINOFFS } from './MOCKSPINOFFS';
import { Spinoff } from './spinoffs.model';
import { max, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinoffsService {
  spinoffListChangedEvent = new Subject<Spinoff[]>();
  spinoffs: Spinoff[] = [];
  maxSpinoffId: number;
  

  constructor() {
    this.spinoffs = MOCKSPINOFFS;
    this.maxSpinoffId = this.getMaxId();
  }

  getMaxId(): number {
    let maxId = 0;
    for (let spinoff of this.spinoffs) {
      let currentId = spinoff.id;
      if (currentId > maxId) {
        maxId = currentId
      };
    };
    return maxId;
  }

  getSpinoffs(): Spinoff[] {
    return this.spinoffs.slice();
  }

  getOneSpinoff(id: number): Spinoff {
    return this.spinoffs[id];
  }

  addSpinoff(newSpinoff: Spinoff) {
    console.log(newSpinoff);
    if (!newSpinoff || newSpinoff === null) {
      return;
    };
    this.maxSpinoffId++;
    newSpinoff.id = this.maxSpinoffId;
    this.spinoffs.push(newSpinoff);
    let spinoffListClone = this.spinoffs.slice();
    this.spinoffListChangedEvent.next(spinoffListClone);
  }

  updateSpinoff(originalSpinoff: Spinoff, newSpinoff: Spinoff) {
    if (!originalSpinoff || originalSpinoff === null) {
      return;
    };
    let position = this.spinoffs.indexOf(originalSpinoff);
    if (position < 0) {
      return;
    }
    newSpinoff.id = originalSpinoff.id;
    this.spinoffs[position] = newSpinoff;
    let spinoffListClone = this.spinoffs.slice();
    this.spinoffListChangedEvent.next(spinoffListClone);
  }
}
