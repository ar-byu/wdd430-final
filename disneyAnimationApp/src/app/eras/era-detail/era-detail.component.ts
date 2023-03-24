import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Era } from '../eras.model';
import { ErasService } from '../eras.service';

@Component({
  selector: 'app-era-detail',
  templateUrl: './era-detail.component.html',
  styleUrls: ['./era-detail.component.css']
})
export class EraDetailComponent implements OnInit {
  era: Era;
  id: number;

  constructor(private erasService: ErasService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.era = this.erasService.getOneEra(this.id);
      }
    )
  }

}
