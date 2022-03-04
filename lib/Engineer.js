const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    }
    getGithub() {
        return this.gitHub
    }
    getRole() {
        return 'Engineer';
    }
}
const newEngineer = new Engineer("Nick", 1, "wngartman@email.com", "https://github.com/wngartman");

newEngineer.getName();

module.exports = Engineer;
