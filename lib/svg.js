class SVG{
    constructor(){
        this.text = ''
        this.shape = ''
    }
    render(){
        return `<svg width="391" height="391" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
}

module.exports = SVG