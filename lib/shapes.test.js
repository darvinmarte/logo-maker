
const {Circle, Square, Triangle} = require('../lib/shapes')


describe('Circle', () => {
    describe('isCircle', () => {
        it('renders circle correctly', () => {
            const shape = new Circle();
            const expects = `<circle cx="125" cy="125" r="75" fill="green"/>`
            shape.setColor("green");
            expect(shape.render()).toEqual(expects)
        });
    });
});

describe('Triangle', () => {
    describe('isTriangle', () => {
        it('renders a triangle correctly', () => {
            const shape = new Triangle();
            const expects = `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`
            shape.setColor("blue");
            expect(shape.render()).toEqual(expects);
        });
    });
});

describe('Square', () => {
    describe('isSquare', () => {
        it('renders square correctly', () => {
            const shape = new Square();
            const expects = `<rect x="25" y="25" width="200" height="200" fill="yellow"/>`
            shape.setColor("yellow");
            expect(shape.render()).toEqual(expects)
        });
    });
});