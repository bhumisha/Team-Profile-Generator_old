const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

const generateSite = require('./utils/generate-site');
const generatePage = require('./page-template');

const teamDetail = [];

const promtManager = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter team manager\'s name?!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "What is the team manager's Id?",
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('Please enter team manager\'s Id?!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "what is the team manager's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter team manager\'s email!');
                return false;
            }
        }
    },
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
    ]).then(data => {
            const managerObj = new Manager(data.name,data.employeeId,data.email,data.officeNumber)
            //Manager new Object
            teamDetail.push(managerObj)
            
    });
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your engineer's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter engineer\'s name?!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is your engineer's Id?",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter engineer\'s Id?!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "what is your engineer's email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter engineer\'s email!');
                    return false;
                }
            }
        },
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
    .then(data => {
        const engineerObj = new Engineer(data.name,data.employeeId,data.email,data.githubUsername)
        //Manager new Object
        teamDetail.push(engineerObj)
        return promtForMoreOption();
    });
};

const promptIntern = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter your intern\'s name?!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "What is your intern's Id?",
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('Please enter intern\'s Id?!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "what is  your intern's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter  your intern\'s email Address!');
                return false;
            }
            }
        },
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
    ]).then(data => {
        const internObj = new Intern(data.name,data.employeeId,data.email,data.school)
        //Manager new Object
        teamDetail.push(internObj);
        return promtForMoreOption();
    });
};

const promtForMoreOption = () =>  {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: "Which type of team member whould you like to add?",
            choices:['Engineer','Intern','I don\'t want to add any more team members']
        }
    ])
    .then(optionData => {
        if(optionData.option === 'Engineer'){
            return promptEngineer();
              
        }else if(optionData.option === 'Intern'){
            promptIntern();
        }else{
            generatePage(teamDetail)
            .then(pageHTML => {
                return generateSite.writeFile(pageHTML);
            })
            .then(writeFileResponse => {
                console.log(writeFileResponse);
                return generateSite.copyFile();
            })
                .then(copyFileResponse => {
                console.log(copyFileResponse);
            })
        }
    })
};


function init() {

    promtManager()
    .then(promtForMoreOption)
    .catch(err => {
        console.log(err);
    });
        
  }

// Function call to initialize app
init();  
