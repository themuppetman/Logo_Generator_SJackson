const inquirer = require('inquirer');
const { Circle, Square, Triangle, textRules } = require('./shapes'); // Adjust the path as necessary

// Function to prompt the user
function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'list',
      name: 'color',
      message: 'What is your favorite color?',
      choices: ['Red', 'Blue', 'Green', 'Yellow'],
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure?',
      default: true,
    },
  ]);
}

// Main function to run
async function main() {
  try {
    const answers = await promptUser();
    console.log('User input:', answers);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the main function
main();
