import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {
  @Input() character: Character;
  @Input() index: number;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {}
}
