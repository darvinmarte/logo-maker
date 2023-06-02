const fs = require('fs')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter 3 letters:'
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
        const logo_img = logo_img.image(logo);
        logo_img.pipe(fs.createWriteStream('logo.svg'));

        fs.writeFile('logo', logo, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
        } else {
        }
    });