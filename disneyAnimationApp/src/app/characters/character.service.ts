import {Injectable, EventEmitter } from '@angular/core';
import { Character } from './character.model';
import { MOCKCHARACTERS } from './MOCKCHARACTERS';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    characterListChangedEvent = new Subject<Character[]>();
    characters: Character[] = [];
    maxCharacterId: number;

    constructor() {
        this.characters = MOCKCHARACTERS;
        this.maxCharacterId = this.getMaxId();
    }

    getMaxId(): number {
        let maxId = 0;
        for (let character of this.characters) {
            let currentId = character.id;
            if (currentId > maxId) {
                maxId = currentId;
            };
        };
        return maxId;
    }

    getCharacters(): Character[] {
        return this.characters.slice();
    }

    getOneCharacter(id: number): Character {
        return this.characters[id];
    }

    updateCharacter(originalCharacter: Character, newCharacter: Character) {
        if (!originalCharacter || originalCharacter === null) {
            return;
        };
        let position = this.characters.indexOf(originalCharacter);
        if (position < 0) {
            return;
        };
        newCharacter.id = originalCharacter.id;
        this.characters[position] = newCharacter;
        let characterListClone = this.characters.slice();
        this.characterListChangedEvent.next(characterListClone);
    }

    addCharacter(newCharacter: Character) {
        if (!newCharacter || newCharacter === null) {
            return;
        }
        this.maxCharacterId++;
        newCharacter.id = this.maxCharacterId;
        this.characters.push(newCharacter);
        let characterListClone = this.characters.slice();
        this.characterListChangedEvent.next(characterListClone);
    }

}