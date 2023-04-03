const inquirer = require('inquirer')
const fs = require('fs')
const shapes = require('lib/shapes.js')

const questions = [
    {
        type: 'checkbox',
        name: 'shape',
        message: 'Please select shape.',
        choices: ['circle', 'square', 'triangle'],
    },

    {
        type: 'input',
        name: 'text',
        message: 'Please enter text needed for logo, of no text please leave blank.'
    },
]
