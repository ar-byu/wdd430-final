import {Injectable, EventEmitter } from '@angular/core';
import { Character } from './character.model';
import {Subject} from 'rxjs';
import { MOCKCHARACTERS } from './MOCKCHARACTERS';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    characterListChanged = new Subject<Character[]>;
    characters: Character[] = [];

    constructor() {
        this.characters = MOCKCHARACTERS;
    }

    getCharacters(): Character[] {
        return this.characters.slice();
    }

    getOneCharacter(id: number): Character {
        return this.characters[id];
    }

}