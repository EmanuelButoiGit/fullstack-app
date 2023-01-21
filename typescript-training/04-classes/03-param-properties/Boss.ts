class Boss{

    public get firstName(): string{
        return this._firstName;
    }

    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    public get lastName(): string{
        return this._lastName;
    }

    public set lastName(lastName: string) {
        this._lastName = lastName;
    }

    constructor(private _firstName: string, private _lastName: string){
    }
}

let boss = new Boss("Emy", "Butoi");

console.log(boss.firstName + " " + boss.lastName);