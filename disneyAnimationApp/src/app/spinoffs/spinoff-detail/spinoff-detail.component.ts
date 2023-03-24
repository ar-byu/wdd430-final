import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Spinoff } from '../spinoffs.model';
import { SpinoffsService } from '../spinoffs.service';

@Component({
  selector: 'app-spinoff-detail',
  templateUrl: './spinoff-detail.component.html',
  styleUrls: ['./spinoff-detail.component.css']
})
export class SpinoffDetailComponent implements OnInit{
  spinoff: Spinoff;
  id: number;

  constructor(private spinoffsService: SpinoffsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.spinoff = this.spinoffsService.getOneSpinoff(this.id);
      }
    )
  }
}
