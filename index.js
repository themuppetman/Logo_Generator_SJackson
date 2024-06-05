const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes'); 
const fs = require('fs');
const path = require('path');

class SVG {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="300">${this.shapeElement}${this.textElement}</svg>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }

    setTextElement(text, color, shapeType) {
        let x = 150, y = 150, fontSize;
        const maxFontSize = 100;
        const baseSize = 50;
        
        // Adjust font size based on text length 
        if (text.length === 1) {
            fontSize = baseSize * 1.5;
        } else if (text.length === 2) {
            fontSize = baseSize * 1.2;
        } else {
            fontSize = baseSize;
        }

        fontSize = Math.min(fontSize, maxFontSize);

        this.textElement = `<text x="${x}" y="${y}" font-size="${fontSize}" text-anchor="middle" dominant-baseline="middle" fill="${color}">${text}</text>`;
    }

    addShape(shape) {
        this.shapeElement += shape.render();
    }
}

// Function to prompt the user
function promptUser() {
    return inquirer.prompt([
         {
             type: 'input',
             name: 'text',
             message: 'Enter text (up to three characters):',
            //  validate: input => input.length <= 3 || 'Text must be up to three characters'
         },
         {
            type: 'input',
            name: 'fileName',
            message: 'Enter file name:'
         },
         {
             type: 'input',
             name: 'textColor',
             message: 'Enter text color (keyword or hexadecimal number):'
         },
         {
             type: 'list',
             name: 'shape',
             message: 'Choose a shape:',
             choices: ['Circle', 'Triangle', 'Square']
         },
         {
             type: 'input',
             name: 'shapeColor',
             message: 'Enter shape color (keyword or hexadecimal number):'
         }
     ])
     .then(answers => {
        const svgContent = generateSVG(answers);
        saveSVG(svgContent, answers);
        console.log(`Generated ${answers.fileName}.svg`); 
     });
}

function generateSVG(answers) {
    const svg = new SVG();
    
    svg.setShapeElement(getShapeInstance(answers.shape, answers.shapeColor));
    svg.setTextElement(answers.text, answers.textColor, answers.shape);

    return svg.render();
}

function getShapeInstance(shapeType, color) {
    switch (shapeType) {
        case 'Circle':
            return new Circle(color);
        case 'Square':
            return new Square(color);
        case 'Triangle':
            return new Triangle(color);
    }
}

function saveSVG(svg, answers) {
    const folderPath = './examples';
    if (!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
    }
    fs.writeFileSync(path.join(folderPath, `${answers.fileName}.svg`), svg);
    console.log(`SVG saved to examples/${answers.fileName}.svg`);
}

async function init() {
    try {
        await promptUser();
    } catch (error) {
        console.error('Error:', error);
    }
}

init();
