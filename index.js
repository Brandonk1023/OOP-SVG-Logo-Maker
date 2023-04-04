const inquirer = require('inquirer')
const fs = require('fs')
const shapes = require('lib/shapes.js')

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters for the text.'
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter in fill color name. Hex code can be entered in place of color name',
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
        message: 'Please enter in a color keyword. Hexadecimal can be used as well.',
    },

]
