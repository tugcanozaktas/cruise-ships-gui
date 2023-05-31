/* globals describe it expect */
const Itinerary = require("../src/itinerary");
const Port = require("../src/Port");
const Ship = require("../src/Ship")

describe("Ship", ()=>{
    
    it("can be instantiated", ()=>{
        const port = new Port("Dover")
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary)

        expect(ship).toBeInstanceOf(Object)
    })

    it("has a starting port", ()=>{
        const port = new Port("Dover")
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary)

        expect(ship.currentPort).toBe(port)
    })
    it('can set sail', () => {
        const dover = new Port('Dover');
        const amsterdam = new Port("Amsterdam")
        const itinerary = new Itinerary([dover, amsterdam]);
        const ship = new Ship(itinerary);
      
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
      });

    it("can dock to another port", ()=>{
        const dover = new Port("Dover")
        const amsterdam = new Port("Amsterdam")
        const itinerary = new Itinerary([dover, amsterdam])
        const ship = new Ship(itinerary)

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(amsterdam)

    })

    it("can\'t sail futher than itinerary", ()=>{
        const dover = new Port("Dover")
        const amsterdam = new Port("Amsterdam")
        const itinerary = new Itinerary([dover, amsterdam])
        const ship = new Ship(itinerary)

        ship.setSail();
        ship.dock();

        expect(()=> ship.setSail()).toThrowError("End of itinerary reached.");
    })
});