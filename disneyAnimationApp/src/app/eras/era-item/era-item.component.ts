import { Component, Input } from '@angular/core';
import { Era } from '../eras.model';

@Component({
  selector: 'app-era-item',
  templateUrl: './era-item.component.html',
  styleUrls: ['./era-item.component.css']
})
export class EraItemComponent {
  @Input() era: Era;
}
