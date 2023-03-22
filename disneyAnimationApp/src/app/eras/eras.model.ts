export class Era {
    private _id: Object;
    public name: string;
    public start_year: string;
    public end_year: string;
    public description: string;
    public moviesInEra: string;

    constructor(_id: Object, name: string, start_year: string, end_year: string, description: string, moviesInEra: string) {
        this._id = _id;
        this.name = name;
        this.start_year = start_year;
        this.end_year = end_year;
        this.description = description;
        this.moviesInEra = moviesInEra;
    }
}