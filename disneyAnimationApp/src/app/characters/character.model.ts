export class Character {
    public id: number;
    public name: string;
    public role: string;
    public description: string;
    public trivia: string;

    constructor(id: number, name: string, role: string, description: string, trivia: string) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.description = description;
        this.trivia = trivia;
    }
}