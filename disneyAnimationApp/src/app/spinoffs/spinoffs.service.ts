import { Injectable } from '@angular/core';
import { Spinoff } from './spinoffs.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpinoffsService {
  spinoffListChangedEvent = new Subject<Spinoff[]>();
  spinoffs: Spinoff[] = [];
  maxSpinoffId: number;
  SERVER_URL = "http://localhost:3000/api/spinoffs";
  

  constructor(private http: HttpClient) {
    this.spinoffs = this.getSpinoffs();
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
    this.http
      .get(this.SERVER_URL)
      .subscribe(
        (spinoffs: Spinoff[]) => {
          this.spinoffs = spinoffs;
          this.maxSpinoffId = this.getMaxId();
          this.spinoffs.sort((a, b) => a.id - b.id);
          this.spinoffListChangedEvent.next(this.spinoffs.slice());
          this.spinoffs = JSON.parse(JSON.stringify(this.spinoffs));
        },
        (errors: any) => {
          console.error(errors);
        }
      )
    return this.spinoffs.slice();
  }

  getOneSpinoff(id: number): Spinoff {
    return this.spinoffs[id];
  }

  addSpinoff(newSpinoff: Spinoff) {
    if (!newSpinoff || newSpinoff === null) {
      return;
    };
    newSpinoff.id = this.getMaxId() + 1;
    console.log(newSpinoff);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http
      .post(this.SERVER_URL, newSpinoff, {headers: headers})
      .subscribe(
        (responseData) => {
          console.log(newSpinoff);
          this.spinoffs.push(newSpinoff);
          let spinoffListClone = this.spinoffs.slice();
          this.spinoffListChangedEvent.next(spinoffListClone);
        }
      )
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

  deleteSpinoff(spinoff: Spinoff) {
    if (!spinoff || spinoff === null) {
      return;
    };
    let position = this.spinoffs.indexOf(spinoff);
    if (position < 0) {
      return;
    };
    this.spinoffs.splice(position, 1);
    let spinoffListClone = this.spinoffs.slice();
    this.spinoffListChangedEvent.next(spinoffListClone);
  }
}
