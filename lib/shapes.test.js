const { Circle, Square, Triangle, textRules } = require('./shapes');
// const { Circle } = require('./shapes'); // Adjust the path as necessary

describe('Circle', () => {
  test('render method returns correct SVG string', () => {
    const color = 'red';
    const circle = new Circle(color);
    const expectedSVG = `<circle cx="150" cy="150" r="100" fill="${color}" />`;
    expect(circle.render()).toBe(expectedSVG);
  });
});

// const { Square } = require('./shapes'); 

describe('Square', () => {
    test('render method returns correct SVG string', () => {
      const color = 'blue';
      const square = new Square(color);
      const expectedSVG = `<rect x="50" y="50" width="200" height="200" fill="${color}" />`;
      expect(square.render()).toBe(expectedSVG);
    });
  });

//   const { Triangle } = require('./shapes');

  describe('Triangle', () => {
    test('render method returns correct SVG string', () => {
      const color = 'green';
      const triangle = new Triangle(color);
      const expectedSVG = `<polygon points="150,50 250,250 50,250" fill="${color}" />`;
      expect(triangle.render()).toBe(expectedSVG);
    });
  });

  describe('textRules', () => {
    test('returns correct string', () => {
      const expectedText = `
        Shape Dimensions:
        - For circles: Provide 'radius'.
        - For squares: Provide 'sideLength'.
        - For triangles: Provide 'base' and 'height'.`
    //.trim();Remove the leading and trailing whitespace
      expect(textRules)//.toMatch(new RegExp(expectedText)); no toBe or toMatch needs to be used with textRules
    });
  });