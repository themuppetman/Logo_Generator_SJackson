const inquirer = require('inquirer');
const { Circle, Square, Triangle, textRules } = require('./lib/shapes'); 
const fs = require('fs');
const path = require('path');


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
     .then(data => {
         console.log('User input:', data);
         generateSVG(data);
     });
      
 }

 function generateSVG(data) {

    const svg = new svg(text, fileName, textColor, shape, shapeColor);
    switch (shape) {
        case 'Circle':
            svg.addShape(new Circle(shape, shapeColor));
            break;
        case 'Square':
            svg.addShape(new Square(shape, shapeColor));
            break;
        case 'Triangle':
            svg.addShape(new Triangle(shape, shapeColor));
            break;
    }
    return svg.render();
}

 function saveSVG(svg, data) { //needed to pass in answers to saveSVG
    const folderPath = './examples';
    const filePath = new filePath(folderPath, `${data.fileName}.svg`);
    
    fs.writeFileSync('', svg);
    console.log(`SVG saved to examples/${data.fileName}.svg`); // Just fileName
}

saveSVG();

async function generateSVG() {
  try {
    const answers = await promptUser();
    console.log('User input:', data);

  } catch (error) {
    console.error('Error:', error);
  }
}




generateSVG();


