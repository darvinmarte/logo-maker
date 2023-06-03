// SVG SIZE: <svg width="391" height="391" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">




describe('Circle', () => {
    describe('isCircle', () => {
        it('renders circle correctly', () => {
            const shape = new Circle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<circle cx="125" cy="125" r="75" fill="green" />')
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
            expect(shape.render()).toEqual('<rect x="25" y="25" width="200" height="200" fill="yellow"/>')
        });
    });
});