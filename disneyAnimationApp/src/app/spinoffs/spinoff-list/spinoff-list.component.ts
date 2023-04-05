import { Component, OnInit } from '@angular/core';
import { Spinoff } from '../spinoffs.model';
import { SpinoffsService } from '../spinoffs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinoff-list',
  templateUrl: './spinoff-list.component.html',
  styleUrls: ['./spinoff-list.component.css']
})
export class SpinoffListComponent implements OnInit {
  spinoffs: Spinoff[] = [];
  private subscription: Subscription;
  isLoading: Boolean = false;

  constructor(private spinoffService: SpinoffsService) {}

  ngOnInit() {
    this.spinoffs = this.spinoffService.getSpinoffs();
    this.isLoading = true;
    this.subscription = this.spinoffService.spinoffListChangedEvent
      .subscribe(
        (spinoffs: Spinoff[]) => {
          this.isLoading = false;
          this.spinoffs = spinoffs;
        }
      )
  }
}
