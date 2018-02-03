class Person {
    constructor(name, age, occupation, country = 'US') {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.country = country;
    }
    greeting() {
        return `Hi my name is ${this.name} and I work as a ${this.occupation}`;
    }
}

function promessFunction(data) {
    return new Promise((resolve, rej) => {
        setTimeout(() => {
            resolve(`Is resolve!, data is: ${data}`);
        }, 1000);
    });
}

module.exports = { Person, promessFunction };