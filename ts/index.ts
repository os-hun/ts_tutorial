class User {
    public age: number;
    public familyName: string;
    public givenName: string;
    constructor (familyName: string, givenName: string, age: number) {
        this.age = age;
        this.familyName = familyName;
        this.givenName = givenName;
    }
}

const user = new User('海老原', '賢治', 44);

const contentsElem = document.getElementById('app');
if (!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}
