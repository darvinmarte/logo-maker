const fs = require('fs')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter 3 letters:',
            validate: (input) => input.length <= 3,
        },
        {
            type: 'input',
            name: 'color',
            message: 'Choose a color:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['cirlce', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Choose a color for the shape:'
        }
    ])
    .then((answers) => {
        const logo = answers.logo
        fs.writeFile('logo.svg', logo, (err) => {
            if (err) throw err;
            console.log('Generated logo.svg!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
        } else {
        }
    });