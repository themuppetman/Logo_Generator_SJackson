const fs = require('fs');
const inquirer = require('inquirer');

// Generate the SVG based on user input
function generateSVG(text, textColor, shape, shapeColor) {
    // Generate SVG string based on user input
    const svg = `<svg width="" height="">
                    <text x="" y="" fill="${textColor}">${text}</text>
                    <${shape} fill="${shapeColor}" cx="" cy="" r=""/>
                </svg>`;
    return svg;
}

function saveSVG(svg) {
    fs.writeFileSync('logo.svg', svg);
}

function promptUser() {
    inquirer.prompt([
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
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal number):'
        }
    ]).then(answers => {
        const svg = generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
        saveSVG(svg);
        console.log('Generated logo.svg');
    });
}

// Call the promptUser function to start the application
promptUser();
