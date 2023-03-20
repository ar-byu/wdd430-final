import { Component } from '@angular/core';

@Component({
  selector: 'app-era-list',
  templateUrl: './era-list.component.html',
  styleUrls: ['./era-list.component.css']
})
export class EraListComponent {
  numbers: Array<number>;

  constructor() {
    this.numbers = Array(8).fill(0).map((x,i)=>i);
  }
}
