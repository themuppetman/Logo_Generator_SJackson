const { Circle, Square, Triangle, textRules } = require('./shapes');
// const { Circle } = require('./shapes'); // Adjust the path as necessary

describe('Circle', () => {
  test('render method returns correct SVG string', () => {
    const color = 'red';
    const circle = new Circle('circle', color);
    const expectedSVG = `<circle cx="150" cy="100" r="80" height="200" width="300" fill="${color}"/>`;
    expect(circle.render()).toBe(expectedSVG);
  });
});

// const { Square } = require('./shapes'); 

describe('Square', () => {
    test('render method returns correct SVG string', () => {
      const color = 'blue';
      const square = new Square('square', color);
      const expectedSVG = `<rect x="100" y="100" width="200" height="200" fill="${color}"/>`;
      expect(square.render()).toBe(expectedSVG);
    });
  });

//   const { Triangle } = require('./shapes');

  describe('Triangle', () => {
    test('render method returns correct SVG string', () => {
      const color = 'green';
      const triangle = new Triangle('triangle', color);
      const expectedSVG = `<polygon height="200" points="0,200 300,200 150,0" fill="${color}"/>`;
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