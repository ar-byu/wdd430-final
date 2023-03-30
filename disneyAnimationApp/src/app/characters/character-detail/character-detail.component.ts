import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: Character;
  id: number;

  constructor(private charactersService: CharacterService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.character = this.charactersService.getOneCharacter(this.id);
      }
    )
  }

  onDelete() {
    this.charactersService.deleteCharacter(this.character);
    this.router.navigate(['/characters'], {relativeTo: this.route});
  }
}
