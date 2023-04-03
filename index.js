const inquirer = require('inquirer')
const fs = require('fs')
const shapes = require('lib/shapes.js')

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Please select shape.',
        choices: ['circle', 'square', 'triangle'],
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter in the fill color name. Hex code can be entered in place of color name.',
    },

    {
        type: 'input',
        name: 'text',
        message: 'Please enter text needed for logo, of no text please leave blank.'
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter in fill color name. Hex code can be entered in place of color name',
    },
]
