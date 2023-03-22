import { Component, OnInit } from '@angular/core';
import { MOCKSPINOFFS } from '../MOCKSPINOFFS';
import { Spinoff } from '../spinoffs.model';

@Component({
  selector: 'app-spinoff-list',
  templateUrl: './spinoff-list.component.html',
  styleUrls: ['./spinoff-list.component.css']
})
export class SpinoffListComponent {
  spinoffs: Spinoff[] = [];

  constructor() {}

  ngOnInit() {
    this.spinoffs = MOCKSPINOFFS;
  }
}
