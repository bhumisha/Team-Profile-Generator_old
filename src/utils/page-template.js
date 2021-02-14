
const generateCardsForEmployee = employee => {
      let specificDetail="";
      let icon="";
      if(employee.getRole() === "Manager"){
        specificDetail = `Office Number: ${employee.getOfficeNumber()}`
        icon = `<i class="fas fa-mug-hot"></i>`
      }
      else if(employee.getRole() === "Engineer"){
        specificDetail = `GitHub: <a href="https://github.com/${employee.getGitHub()}" target="_blank" >${employee.getGitHub()} </a>`
        icon = `<i class="fas fa-user-secret"></i>`
      }
      else if(employee.getRole() === "Intern"){
        specificDetail = `School: ${employee.getSchool()}`
        icon = `<i class="fas fa-user-graduate" ></i>`
      }
    
    return `
            <div class="card" style="width: 18rem;">
              <div class="card-header">
                  <h2> ${employee.getName()} </h2> 
                  <div>
                      ${icon}
                      ${employee.getRole()}
                  </div>
              </div>
              <div class="card-detail">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">${specificDetail}</li>
                  </ul>
              </div>
          </div>`
  }
 
module.exports = (teamDetail) => {
    return `
    <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employee Information</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title py-2 px-3">My Team </h1>
      </div>
    </header>
    <main class="container flex-container">
            ${teamDetail.map((teamObj) => {
              return `${generateCardsForEmployee(teamObj)}`
            }).join('')}
           
    </main> 
    <footer class="container text-center py-3">
     
    </footer>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>

  </html>
    `;
  };

