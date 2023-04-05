import { Component, OnInit } from '@angular/core';
import { Era } from '../eras.model';
import { ErasService } from '../eras.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-era-list',
  templateUrl: './era-list.component.html',
  styleUrls: ['./era-list.component.css']
})
export class EraListComponent implements OnInit {
  eras: Era[] = [];
  private subscription: Subscription;
  isLoading: Boolean = false;

  constructor(private erasService: ErasService) {}

  ngOnInit() {
    this.eras = this.erasService.getEras();
    this.isLoading = true;
    this.subscription = this.erasService.erasListChangedEvent
      .subscribe(
        (eras: Era[]) => {
          this.isLoading = false;
          this.eras = eras;
        }
      )
  }
}
