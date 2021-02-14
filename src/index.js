const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

const teamDetail = [];
const generateFileSite = require('./utils/generate-site');
const generateHTMLPage = require('./utils/page-template');

const employeeRolePrompt = () =>{
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Which type of team member whould you like to add?",
            choices:['Manager','Engineer','Intern','None']
        }
    ]);
};

const promtSuperEmployee = (employeeRole) => {
    console.log(employeeRole)
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: `What is the team ${employeeRole}\'s name?`,
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log(`Please enter ${employeeRole}\'s name?!`);
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: `What is the team ${employeeRole}\'s Id?`,
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log(`Please enter team ${employeeRole}\'s Id?!`);
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the team ${employeeRole}\'s email?`,
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log(`Please enter team ${employeeRole}\'s email!`);
                return false;
            }
        }
    }
    ])
};

const promtManager = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'officeNumber',
        message: "what is the team manager's Office Number?",
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log('Please enter team manager\'s Office Number!');
                return false;
            }
            }
    }
    ])
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubUsername',
            message: "what is your engineer's GitHub username?",
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your engineer\'s GitHub usernam!');
                    return false;
                }
                }
        }
    ])
    
};

const promptIntern = () => {
return inquirer.prompt([
        {
        type: 'input',
        name: 'school',
        message: "what is your intern's school?",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log('Please enter your intern\'s school');
                return false;
            }
            }
        }
    ])
};

function init() {

    employeeRolePrompt()
    .then((employeeRole)=>{
        console.log(  `employeeRole ${employeeRole.role}` )
        if(employeeRole.role!='None'){
            return promtSuperEmployee(employeeRole.role).then((data)=> {
                switch(employeeRole.role){
                    case "Manager": {
                        promtManager().then(officeNumberdata => {
                            const managerObj = new Manager(data.name,data.employeeId,data.email,officeNumberdata.officeNumber,employeeRole.role);
                            teamDetail.push(managerObj);
                            console.log(teamDetail);
                            return init();
                        })
                        break;
                    }
                    case "Engineer": {
                        promptEngineer().then(githubData => {
                            const engineerObj = new Engineer(data.name,data.employeeId,data.email,githubData.githubUsername,employeeRole.role);
                            teamDetail.push(engineerObj);
                            console.log(teamDetail);  
                            return init();
                        })
                        break;
                    }
                    case "Intern": {
                        promptIntern().then(schoolData => {
                            const internObj = new Intern(data.name,data.employeeId,data.email,schoolData.school,employeeRole.role);
                            teamDetail.push(internObj);
                            console.log(teamDetail);  
                            return init();
                        })
                        break;
                    }
                }
            });
        }
        else{
            generateFileSite.writeFile(generateHTMLPage(teamDetail))
            .then(writeFileResponse => {
                console.log(writeFileResponse);
                return generateFileSite.copyFile();
            }).then(copyFileResponse => {
                console.log(copyFileResponse);
            })
        }        
    })
    .catch(err => {
        console.log(err);
    });     
  }

// Function call to initialize app
init();  
