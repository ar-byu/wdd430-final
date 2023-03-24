import { Component, Input } from '@angular/core';
import { Spinoff } from '../spinoffs.model';

@Component({
  selector: 'app-spinoff-item',
  templateUrl: './spinoff-item.component.html',
  styleUrls: ['./spinoff-item.component.css']
})
export class SpinoffItemComponent {
  @Input() spinoff: Spinoff;
  @Input() index: number;
}
