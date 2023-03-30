import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Era } from './eras.model';
import { MOCKERAS } from './MOCKERAS';

@Injectable({
  providedIn: 'root'
})
export class ErasService {
  erasListChangedEvent = new Subject<Era[]>();
  eras: Era[] = [];

  constructor() {
    this.eras = MOCKERAS;
  }

  getEras(): Era[] {
    return this.eras.slice();
  }

  getOneEra(id: number): Era {
    return this.eras[id];
  }

  updateEra(originalEra: Era, newEra: Era) {
    if (!originalEra || originalEra === null) {
      return;
    };
    let position = this.eras.indexOf(originalEra);
    if (position < 0) {
      return;
    };
    newEra.id = originalEra.id;
    this.eras[position] = newEra;
    let eraListClone = this.eras.slice();
    this.erasListChangedEvent.next(eraListClone);
  }

}
