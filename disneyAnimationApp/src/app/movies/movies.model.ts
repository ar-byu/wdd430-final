export class Movie {
    public id: number;
    public title: string;
    public promoImage: string;
    public year: string;
    public era: string;
    public length: string;
    public trailerLink: string;
    public trivia: string;
    public category: string;

    constructor(id: number, title: string, promoImage: string, year: string, era: string, length: string,
        trailerLink: string, trivia: string, category: string) {
            this.id = id;
            this.title = title;
            this.promoImage = promoImage;
            this.year = year;
            this.era = era;
            this.length = length;
            this.trailerLink = trailerLink;
            this.trivia = trivia;
            this.category = category;
    }
}