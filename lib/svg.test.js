const SVG = require('./svg')

describe('SVG', () => {
    describe('renders SVG', () => {
        it('renders svg correctly', () => {
            const svg = new SVG();
            const expects = `<svg width="391" height="391" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg"></svg>`
            expect(svg.render()).toEqual(expects)
        });
    });
});

describe('Color and Text', () => {
    describe('renders color and text', () => {
        it('renders colorand text correctly', () => {
            const svg = new SVG();
            svg.setText("DAM", "blue")
            const expects = `<svg width="391" height="391" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">DAM</text></svg>`
            expect(svg.render()).toEqual(expects)
        });
    });
});
