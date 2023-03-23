import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }
}
