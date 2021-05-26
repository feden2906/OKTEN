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

// Мають бути присутні такі можливості:
// - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
// - вивести найбільшого хабарника верховної ради
// - вивести фсіх депутатів фракції
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
// Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається