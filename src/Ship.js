function Ship(name){
    this.currentPort = name
}

Ship.prototype = {
    setSail(){
         this.currentPort = false
    },
    dock(newPort){
        this.currentPort = newPort
    }
}
module.exports = Ship