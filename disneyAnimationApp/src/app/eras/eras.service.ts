import { Injectable } from '@angular/core';
import { Era } from './eras.model';
import { MOCKERAS } from './MOCKERAS';

@Injectable({
  providedIn: 'root'
})
export class ErasService {
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

}
