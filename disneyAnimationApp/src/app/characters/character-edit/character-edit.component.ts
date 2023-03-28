import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.css']
})
export class CharacterEditComponent implements OnInit {
  originalCharacter: Character;
  character: Character;
  editMode: boolean = false;
  id: number;

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if (!this.id || this.id === null) {
          this.editMode = false;
          return;
        }
        this.originalCharacter = this.characterService.getOneCharacter(this.id);
        if (!this.originalCharacter || this.originalCharacter === null) {
          this.editMode = false;
          return;
        }
        this.editMode = true;
        this.character = JSON.parse(JSON.stringify(this.originalCharacter))
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newCharacter = new Character(value.id, value.name, value.image, value.movie, 
      value.role, value.description, value.string);
    if (this.editMode === true) {
      this.characterService.updateCharacter(this.originalCharacter, newCharacter);
    } else {
      this.characterService.addCharacter(newCharacter);
    };
    this.router.navigate(['/characters'], {relativeTo: this.route});
  }
}
