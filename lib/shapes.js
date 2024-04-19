class Shape{
    constructor() {
        this.color=""
    }
    setColor(color){
        this.color=(color);
    }
}

class Circle extends Shape {
   render () {
       return `<circle cx="150" cy="100" r="80" height="200" width="300" fill="${this.color}"/>`;
   }
}

class Square extends Shape {
    render () {
        return `<rect x="100" y="100" width="200" height="200" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon height="200" points="0,200 300,200 150,0" fill="${this.color}"/>`;
    }
}

module.exports = {Circle, Square, Triangle};
