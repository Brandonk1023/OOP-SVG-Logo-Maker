const {circle, triangle, square} = require('../lib/shapes')

describe('shapes', () => {
    test('Should create a blue circle with text yellow "TXT"', () => {
        const test = new circle("blue", "TXT", "yellow")
        exportAllDeclaration(test.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="transparent" /><${this.shapeSyn} fill="blue" /><text ${this.textCorX} ${this.textCorY} font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`)
    })
    test('Should create a blue triangle with text yellow "TXT"', () => {
        const test = new triangle("blue", "TXT", "yellow")
        exportAllDeclaration(test.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="transparent" /><${this.shapeSyn} fill="blue" /><text ${this.textCorX} ${this.textCorY} font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`)
    })
    test('Should create a blue square with text yellow "TXT"', () => {
        const test = new square("blue", "TXT", "yellow")
        exportAllDeclaration(test.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="transparent" /><${this.shapeSyn} fill="blue" /><text ${this.textCorX} ${this.textCorY} font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`)
    })
})