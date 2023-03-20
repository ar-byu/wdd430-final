import { Component } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  numbers: Array<number>;

  constructor() {
    this.numbers = Array(5).fill(0).map((x,i)=>i);
  }
}
