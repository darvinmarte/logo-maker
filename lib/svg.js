class SVG{
    constructor(){
        this.text = ''
        this.shape = ''
    }
    render(){
        return `<svg width="391" height="391" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }

    setText(text, color){
        if(text.length > 3){
            throw new Error (`Must be 3 letters!`)
        }
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shape = shape.render()
    }
}

module.exports = SVG