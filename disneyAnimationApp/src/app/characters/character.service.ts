import {Injectable } from '@angular/core';
import { Character } from './character.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    characterListChangedEvent = new Subject<Character[]>();
    characters: Character[] = [];
    maxCharacterId: number;

    constructor(private http: HttpClient) {
        this.characters = this.getCharacters();
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
        this.http.get<Character[]>('http://localhost:3000/characters')
        .subscribe(
            (characters: Character[]) => {
                this.characters = characters;
                this.maxCharacterId = this.getMaxId();
                this.characters.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
                this.characterListChangedEvent.next(this.characters.slice());
            },
            (errors: any) => {
                console.error(errors)
            }
        )
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

    deleteCharacter(character: Character) {
        if (!character || character === null) {
            return;
        };
        let position = this.characters.indexOf(character);
        if (position < 0) {
            return;
        };
        this.characters.splice(position, 1);
        let characterListClone = this.characters.slice();
        this.characterListChangedEvent.next(characterListClone);
    }

}