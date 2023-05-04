class shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="transparent" /><${this.shapeSyn} fill="${this.shapeColor}" /><text ${this.textCorX} ${this.textCorY} font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`  
}
}

class circle extends shapes {
    constructor(text, textColor, shapeColor, shapeCode, textCorX, textCorY) {
    super(text, textColor, shapeColor)
    this.shapeSyn = ''
    this.textCorX = ''
    this.textCorY = ''
}
}

class triangle extends shapes {
    constructor(text, textColor, shapeColor, shapeCode, textCorX, textCorY) {
        super(text, textColor, shapeColor)
        this.shapeSyn = ''
        this.textCorX = ''
        this.textCorY = ''
    }
}

class square extends shapes {
    constructor(text, textColor, shapeColor, shapeCode, textCorX, textCorY) {
        super(text, textColor, shapeColor)
        this.shapeSyn = ''
        this.textCorX = ''
        this.textCorY = ''
    }
}

module.exports = { shapes, circle, triangle, square}