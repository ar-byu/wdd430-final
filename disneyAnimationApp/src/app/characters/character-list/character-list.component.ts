import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
  characters: Character[] = [];
  private subscription: Subscription;
  isLoading: Boolean = false;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
    this.isLoading = true;
    this.subscription = this.characterService.characterListChangedEvent
      .subscribe(
        (characters: Character[]) => {
          this.isLoading = false;
          this.characters = characters;
        }
      )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
