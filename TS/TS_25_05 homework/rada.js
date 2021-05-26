var SupremeCouncil = /** @class */ (function () {
    function SupremeCouncil(party) {
        this.party = party;
    }
    return SupremeCouncil;
}());
var Party = /** @class */ (function () {
    function Party(title, chief, members) {
        this.title = title;
        this.chief = chief;
        this.members = members;
    }
    return Party;
}());
var Deputy = /** @class */ (function () {
    function Deputy(name, age, gender, honestyDegree) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honestyDegree = honestyDegree;
    }
    return Deputy;
}());
// 1) Депутат
//    - імя
//    - вік
//    - стать
//    - ступінь чесності (0-100)
//    - мінімальна сума хабаря
