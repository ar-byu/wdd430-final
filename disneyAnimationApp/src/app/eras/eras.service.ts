import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Era } from './eras.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErasService {
  erasListChangedEvent = new Subject<Era[]>();
  eras: Era[] = [];
  SERVER_URL = "http://localhost:3000/api/eras";

  constructor(private http: HttpClient) {
    this.eras = this.getEras();
  }

  getEras(): Era[] {
    this.http
      .get(this.SERVER_URL)
      .subscribe(
        (eras: Era[]) => {
          this.eras = eras;
          this.eras.sort((a, b) => +a.start_year - +b.start_year);
          this.erasListChangedEvent.next(this.eras.slice());
          this.eras = JSON.parse(JSON.stringify(this.eras));
        },
        (errors: any) => {
          console.error(errors)
        }
      )
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
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http
      .put(this.SERVER_URL + '/' + newEra.id, newEra, {headers: headers})
      .subscribe(
        (result) => {
          this.eras[position] = newEra;
          let eraListClone = this.eras.slice();
          this.erasListChangedEvent.next(eraListClone);
        }
      )
  }
}
