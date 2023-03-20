import { Component } from '@angular/core';

@Component({
  selector: 'app-spinoff-list',
  templateUrl: './spinoff-list.component.html',
  styleUrls: ['./spinoff-list.component.css']
})
export class SpinoffListComponent {
  numbers: Array<number>;

  constructor() {
    this.numbers = Array(5).fill(0).map((x,i)=>i);
  }

}
