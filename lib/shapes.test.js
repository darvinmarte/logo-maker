
describe('Circle', () => {
    describe('isCircle', () => {
        it('renders circle correctly', () => {
            const shape = new Circle();
            shape.setColor("green");
            expect(shape.render()).toEqual()
        });
    });
});

describe('Triangle', () => {
    describe('isTircle', () => {
        it('renders a triangle correctly', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});

describe('Square', () => {
    describe('isSquare', () => {
        it('renders square correctly', () => {
            const shape = new Square();
            shape.setColor("yellow");
            expect(shape.render()).toEqual()
        });
    });
});