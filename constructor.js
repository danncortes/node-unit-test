class Person{
    constructor(name, age, occupation, country='US'){
        this.name =  name;
        this.age = age;
        this.occupation = occupation;
        this.country = country;
    }
    greeting(){
        return `Hi my name is ${this.name} and I work as a ${this.occupation}`;
    }
}

module.exports = Person;
