export class Era {
    public id: number;
    public name: string;
    public start_year: string;
    public end_year: string;
    public description: string;
    public moviesInEra: string;

    constructor(id: number, name: string, start_year: string, end_year: string, description: string, moviesInEra: string) {
        this.id = id;
        this.name = name;
        this.start_year = start_year;
        this.end_year = end_year;
        this.description = description;
        this.moviesInEra = moviesInEra;
    }
}