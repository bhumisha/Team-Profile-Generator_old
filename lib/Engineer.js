const Employee = require("./Employee");
class Engineer extends Employee{
    constructor(name,id,email,github,role){
        super(name,id,email);
        this.github = github;
        this.role = role;
    }
    getGitHub(){
        return this.github;
    }
    setGitHub(gitHub){
        this.github = gitHub;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;