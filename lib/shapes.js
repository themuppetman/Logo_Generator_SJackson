class shape {

    constructor(color) {
        this.color = color;
    }
}

class Circle extends shape {
    render() {
        return `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
    }
}

class Square extends shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

class Triangle extends shape {
    render() {
        return `<polygon points="150,50 250,250 50,250" fill="${this.color}" />`;
    }
}

const textRules = `
  Shape Dimensions:
  - For circles: Provide 'radius'.
  - For squares: Provide 'sideLength'.
  - For triangles: Provide 'polygon points' and 'base' and 'height'.
`.trim();

module.exports = { Circle, Square, Triangle, textRules };

