export class Video {
    constructor(
        private id:string,
    ) {}

    getId() {
        return this.id;
    }
    
    setId(id: string) {
        this.id = id;
    }
}