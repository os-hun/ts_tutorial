"use strict";
var User = /** @class */ (function () {
    function User(familyName, givenName, age) {
        this.age = age;
        this.familyName = familyName;
        this.givenName = givenName;
    }
    return User;
}());
var user = new User('海老原', '賢治', 44);
var contentsElem = document.getElementById('app');
if (!!contentsElem) {
    contentsElem.innerText = user.familyName + " " + user.givenName;
}
