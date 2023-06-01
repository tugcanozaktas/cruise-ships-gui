function Port(name){
    this.name = name
    this.ships = []
}

Port.prototype = {
    addShip(ship) {
        this.ships.push(ship)
    },

    removeShip(ship) {
        if(this.ships.includes(ship)){
            index = this.ships.indexOf(ship)

            this.ships.splice(index, 1)
        }
    }
}

module.exports= Port