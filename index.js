const fs = require('fs')
const inquirer = require('inquirer')
const {Circle, Triangle, Square} = require('./lib/shapes')
const SVG = require('./lib/svg')


function writeToFile(fileName, answers){
    console.log('hello')
    fs.writeFile(fileName, answers, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg!');
    });
}

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
        let myShape;
        switch(answers.shape){
            case 'circle':
            myShape = new Circle()
            break;
            case 'triangle':
            myShape = new Triangle()
            break;
            case 'square':
            myShape = new Square()
            break;
        }
        const logo = new SVG()
        logo.setShape(myShape)
        logo.setText(answers.text, answers.color)
        writeToFile('logo.svg', logo.render())
    })
    .catch((error) => {
        if (error.isTtyError) {
        } else {
        }
    });