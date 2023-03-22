import { Component, OnInit } from '@angular/core';
import { Era } from '../eras.model';
import { MOCKERAS } from '../MOCKERAS';

@Component({
  selector: 'app-era-list',
  templateUrl: './era-list.component.html',
  styleUrls: ['./era-list.component.css']
})
export class EraListComponent implements OnInit {
  eras: Era[] = [];

  constructor() {}

  ngOnInit() {
    this.eras = MOCKERAS;
  }
}
