export class Movie {
    private _id: Object;
    public title: string;
    public promoImage: string;
    public year: string;
    public era: string;
    public length: string;
    public trailerLink: string;
    public trivia: string;
    public category: string;

    constructor(_id: Object, title: string, promoImage: string, year: string, era: string, length: string,
        trailerLink: string, trivia: string, category: string) {
            this._id = _id;
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