class shape {

    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

class Circle extends shape {
    render () {
        return `<circle cx="150" cy="100" r="80" height="200" width="300" fill="${this.color}"/>`;
    }
 }
 
 class Square extends shape {
     render () {
         return `<rect x="100" y="100" width="200" height="200" fill="${this.color}"/>`;
     }
 }
 
 class Triangle extends shape {
     render () {
         return `<polygon height="200" points="0,200 300,200 150,0" fill="${this.color}"/>`;
     }
 }
//  demenions for text based on shape type
 const textRules = `
  shape dimensions:
  - For circles: Provide 'radius'.
  - For squares: Provide 'sideLength'.
  - For triangles: Provide 'base' and 'height'.
`;

 module.exports = {Circle, Square, Triangle, textRules};
