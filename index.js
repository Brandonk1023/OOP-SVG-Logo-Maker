const inquirer = require('inquirer')
const fs = require('fs')
const shapes = require('lib/shapes.js')

inquirer
    .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters for the text.',
        validate: function(input) {
            if(input.length > 3) {
                return "Text must be 3 charaters or less."
            } else {
                return true
            }
        }
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter in color keyword. Hexadecimal can be entered as well.',
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Please select shape.',
        choices: ['circle', 'triangle','square'],
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter in a color keyword. Hexadecimal can be entered as well.',
    },

])

