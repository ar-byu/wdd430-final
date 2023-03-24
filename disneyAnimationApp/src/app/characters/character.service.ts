import {Injectable, EventEmitter } from '@angular/core';
import { Character } from './character.model';
import { MOCKCHARACTERS } from './MOCKCHARACTERS';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    characters: Character[] = [];

    constructor() {
        this.characters = MOCKCHARACTERS;
    }

    getCharacters(): Character[] {
        return this.characters.slice();
    }

    getOneCharacter(index: number): Character {
        return this.characters[index];
    }

}