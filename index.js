const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes.js');

// Generate the SVG based on user input
function generateSVG(data) {
    let svgContent = `<svg width="300" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">`;

    // Add text element
    svgContent += `<text x="50" y="100" fill="${data.textColor}">${data.text}</text>`;

    // Add shape element
    switch (data.shape) {
        case 'Circle':
            svgContent += `<circle cx="100" cy="100" r="50" fill="${data.shapeColor}"/>`;
            break;
        case 'Triangle':
            svgContent += `<polygon points="100,50 50,150 150,150" fill="${data.shapeColor}"/>`;
            break;
        case 'Square':
            svgContent += `<rect x="50" y="50" width="100" height="100" fill="${data.shapeColor}"/>`;
            break;
    }

    svgContent += `</svg>`;

    return svgContent;
}

function saveSVG(svg) {
    fs.writeFileSync('logo.svg', svg);
}

function promptUser() {
   return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text (up to three characters):'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal number):'
        },
        {
            type: 'select',
            name: 'Shape',
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
        const svg = generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
        saveSVG(svg);
        console.log('Generated logo.svg');
    });
    

}



// Call the promptUser function to start the application
promptUser();
