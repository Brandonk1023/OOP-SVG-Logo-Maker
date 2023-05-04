const {circle, triangle, square} = require('../lib/shapes')

describe('shapes', () => {
    test('Should create a blue circle with yellow "TXT"', () => {
        const test = new circle("TXT", "yellow", "blue")
    expect(test.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="transparent" /><circle cx="160" cy="100" r="80" fill="blue" /><text x="160" y="120" font-size="60" text-anchor="middle" fill="yellow">TXT</text></svg>`)
})
    test('Should create a blue triangle with yellow "TXT"', () => {
        const test = new triangle("TXT", "yellow", "blue")
        expect(test.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="transparent" /><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="yellow">TXT</text></svg>`)
    })
    test('Should create a blue square with yellow "TXT"', () => {
        const test = new square("TXT", "yellow", "blue")
        expect(test.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="transparent" /><rect x="75" y="25" width="150" height="150" fill="blue" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="yellow">TXT</text></svg>`)
    })
})