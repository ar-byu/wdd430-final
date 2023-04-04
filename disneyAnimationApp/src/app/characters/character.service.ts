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
    SERVER_URL = "http://localhost:3000/api/characters";

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
        this.http
        .get(this.SERVER_URL)
        .subscribe(
            (characters: Character[]) => {
                this.characters = characters;
                this.maxCharacterId = this.getMaxId();
                this.characters.sort((a, b) => a.id - b.id);
                this.characterListChangedEvent.next(this.characters.slice());
                this.characters = JSON.parse(JSON.stringify(this.characters));
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
        const headers = new HttpHeaders({'Content-Type': 'application/json'})
        this.http
            .put(this.SERVER_URL + '/' + newCharacter.id,
                newCharacter, {headers: headers})
            .subscribe(
                (result) => {
                    this.characters[position] = newCharacter;
                    let characterListClone = this.characters.slice();
                    this.characterListChangedEvent.next(characterListClone);
                }
            )
    }

    addCharacter(newCharacter: Character) {
        if (!newCharacter || newCharacter === null) {
            return;
        }
        newCharacter.id;
        console.log(newCharacter);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        this.http
        .post(this.SERVER_URL, newCharacter, {headers: headers})
        .subscribe(
            (responseData) => {
                this.characters.push(newCharacter);
                let characterListClone = this.characters.slice();
                this.characterListChangedEvent.next(characterListClone);
            }
        )
        
    }

    deleteCharacter(character: Character) {
        if (!character || character === null) {
            return;
        };
        let position = this.characters.indexOf(character);
        if (position < 0) {
            return;
        };
        this.http
            .delete(this.SERVER_URL + '/' + character.id)
            .subscribe(
                (response: Response) => {
                    this.characters.splice(position, 1);
                    let characterListClone = this.characters.slice();
                    this.characterListChangedEvent.next(characterListClone);
                }
            )
    }

}