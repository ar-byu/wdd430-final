import { Component, Input, OnInit } from '@angular/core';
import { Era } from '../eras.model';
import { ErasService } from '../eras.service';

@Component({
  selector: 'app-era-item',
  templateUrl: './era-item.component.html',
  styleUrls: ['./era-item.component.css']
})
export class EraItemComponent implements OnInit {
  @Input() era: Era;
  @Input() index: number;

  constructor(private erasService: ErasService) {}

  ngOnInit() {}
}
