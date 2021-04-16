const Intern = require('./Intern.js')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school;
    }

    getSchool(){
        return 'School';
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Intern; 