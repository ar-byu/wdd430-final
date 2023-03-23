export class Spinoff {
    public id: number;
    public title: string;
    public related: string;
    public type: string;

    constructor(id: number, title: string, related: string, type: string) {
        this.id = id;
        this.title = title;
        this.related = related;
        this.type = type;
    }
}