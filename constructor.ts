class abc
{
    first_nam: string;
    last_nam: string;

    constructor(fnam,lnam)
    {
        this.first_nam = fnam
        this.last_nam = lnam
    }

    fullname() {
        return this.first_nam + " " + this.last_nam;
    }
}

const abcd = new abc("hai","hello")

console.log(abcd.fullname())
