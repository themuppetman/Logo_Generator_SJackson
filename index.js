const inquirer = require('inquirer');
const { Circle, Square, Triangle, textRules } = require('./lib/shapes'); 
const fs = require('fs');
const path = require('path');

class SVG{
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="300">${this.shapeElement}${this.textElement}</svg>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
    setTextElement(text,color) {
        this.textElement = `<text x="150" y="75" font-size="75" text-anchor="middle" shape="Square" fill="${color}">${text}</text>`
    }
    setTextElement(text,color) {
        this.textElement = `<text x="75" y="150" font-size="75" textAnchor="middle" shape="Triangle" fill="${color}">${text}</text>`
    }    
    setTextElement(text,color) {
        this.textElement = `<text x="75" y="125" font-size="75" textAnchor="middle" shape="Circle" fill="${color}">${text}</text>`
    }
    addShape(shape) {
        this.shapeElement += shape.render()
    }
}

// Function to prompt the user
function promptUser() {
    return inquirer.prompt([
         {
             type: 'input',
             name: 'text',
             message: 'Enter text (up to three characters):'
         },
         {
            type: 'input',
            name: 'fileName', //Correct sybtax error
            message: 'Enter file name:'
         },
         {
             type: 'input',
             name: 'textColor',
             message: 'Enter text color (keyword or hexadecimal number):'
         },
         {
             type: 'list',//switch to list
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
        const svgContent = generateSVG(answers); // Pass the entire answers object
        saveSVG(svgContent, answers); // Pass both SVG content and answers to saveSVG
        console.log(`Generated ${answers.fileName}.svg`); 
     });
      
 }

 function generateSVG(answers) {
    const svg = new SVG(answers.text, answers.fileName, answers.textColor, answers.shape, answers.shapeColor);
    
    svg.setTextElement(answers.text, answers.textColor);//add text to svg

    switch (answers.shape) {
        case 'Circle':
            svg.addShape(new Circle(answers.shape, answers.shapeColor));
            break;
        case 'Square':
            svg.addShape(new Square(answers.shape, answers.shapeColor));
            break;
        case 'Triangle':
            svg.addShape(new Triangle(answers.shape, answers.shapeColor));
            break;
    }
    return svg.render(saveSVG);
}

 function saveSVG(svg, answers) { //needed to pass in answers to saveSVG
    const folderPath = './examples';
    fs.writeFileSync(path.join(folderPath, `${answers.fileName}.svg`), svg);
    
    console.log(`SVG saved to examples/${answers.fileName}.svg`); // Just fileName
}



async function init() {
  try {
    const answers = await promptUser();
    console.log('User input:', answers);

  } catch (error) {
    console.error('Error:', error);
  }
}

init(generateSVG);


