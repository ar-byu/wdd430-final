import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Spinoff } from '../spinoffs.model';
import { SpinoffsService } from '../spinoffs.service';

@Component({
  selector: 'app-spinoff-edit',
  templateUrl: './spinoff-edit.component.html',
  styleUrls: ['./spinoff-edit.component.css']
})
export class SpinoffEditComponent implements OnInit {
  originalSpinoff: Spinoff;
  spinoff: Spinoff;
  editMode: boolean = false;
  id: number;

  constructor(private spinoffsService: SpinoffsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if (!this.id || this.id === null) {
          this.editMode = false;
          return;
        };
        this.originalSpinoff = this.spinoffsService.getOneSpinoff(this.id);
        if (!this.originalSpinoff || this.originalSpinoff === null) {
          this.editMode = false;
          return;
        };
        this.editMode = true;
        this.spinoff = JSON.parse(JSON.stringify(this.originalSpinoff));
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newSpinoff = new Spinoff(value.id, value.title, value.related, value.type);
    if (this.editMode === true) {
      this.spinoffsService.updateSpinoff(this.originalSpinoff, newSpinoff);
    } else {
      this.spinoffsService.addSpinoff(newSpinoff);
    }
    this.router.navigate(['/spinoffs'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['/spinoffs'], {relativeTo: this.route});
  }
}
