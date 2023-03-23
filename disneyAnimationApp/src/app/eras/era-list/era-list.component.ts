import { Component, OnInit } from '@angular/core';
import { Era } from '../eras.model';
import { ErasService } from '../eras.service';

@Component({
  selector: 'app-era-list',
  templateUrl: './era-list.component.html',
  styleUrls: ['./era-list.component.css']
})
export class EraListComponent implements OnInit {
  eras: Era[] = [];

  constructor(private erasService: ErasService) {}

  ngOnInit() {
    this.eras = this.erasService.getEras();
  }
}
