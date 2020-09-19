export class Registro {
    public format: string;
    public num: string;
    public name: string;
    public created: Date;

    constructor(format: string, num: string, name: string) {
        this.format = format;
        this.num = num;
        this.name = name;
        this.created = new Date();

    }
}
