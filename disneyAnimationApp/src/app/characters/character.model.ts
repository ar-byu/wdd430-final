export class Character {
    private _id: Object;
    public name: string;
    public role: string;
    public description: string;
    public trivia: string;

    constructor(_id: Object, name: string, role: string, description: string, trivia: string) {
        this._id = _id;
        this.name = name;
        this.role = role;
        this.description = description;
        this.trivia = trivia;
    }
}