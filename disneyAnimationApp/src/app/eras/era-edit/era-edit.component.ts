import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Era } from '../eras.model';
import { ErasService } from '../eras.service';

@Component({
  selector: 'app-era-edit',
  templateUrl: './era-edit.component.html',
  styleUrls: ['./era-edit.component.css']
})
export class EraEditComponent implements OnInit {
  originalEra: Era;
  era: Era;
  editMode: boolean = false;
  id: number;

  constructor(private erasService: ErasService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if (!this.id || this.id === null) {
          this.editMode = false;
          return;
        }
        this.originalEra = this.erasService.getOneEra(this.id);
        if (!this.originalEra || this.originalEra === null) {
          this.editMode = false;
          return;
        }
        this.editMode = true;
        this.era = JSON.parse(JSON.stringify(this.originalEra))
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newEra = new Era(value.id, value.name, value.start_year, value.end_year, value.description, value.moviesInEra);
    if (this.editMode === true) {
      this.erasService.updateEra(this.originalEra, newEra);
    } else {
      this.editMode = false;
      return;
    }
    this.router.navigate(['/eras'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['/eras'], {relativeTo: this.route});
  }

}
