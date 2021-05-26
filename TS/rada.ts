class SupremeCouncil {
    public party: string[];
    public supervisoryCommittee: string;
    constructor(party: string[]) {
        this.party = party
    }
}

class Party {
    public title: string;
    public chief: string;
    protected members: string[];
    constructor(title: string, chief: string, members: string[]) {
        this.title = title;
        this.chief = chief;
        this.members = members
    }

}


class Deputy {
public name: string;
public age: number;
public gender: string;
protected honestyDegree: number | string;
constructor(name: string, age: number, gender: string, honestyDegree: number | string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.honestyDegree = honestyDegree;

}
}

// 1) Депутат
//    - імя
//    - вік
//    - стать
//    - ступінь чесності (0-100)
//    - мінімальна сума хабаря