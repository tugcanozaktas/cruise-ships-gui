/* globals describe it expect */
const Itinerary = require("../src/itinerary");
const Port = require("../src/Port");
const Ship = require("../src/Ship")

describe("Ship", ()=>{
    
    let port;
    let itinerary;
    let ship;
    
    beforeEach(()=>{
        port = new Port("Dover")
        itinerary = new Itinerary([port])
        ship = new Ship(itinerary)
    })


    it("can be instantiated", ()=>{
        expect(ship).toBeInstanceOf(Object)
    })

    it("has a starting port", ()=>{
        expect(ship.currentPort).toBe(port)
    })
    
    it("gets added on instantation", ()=>{
        expect(ship.currentPort.ships).toContain(ship)
    })
});


describe("with ports and itinerary", ()=>{
    
    let ship;
    let dover;
    let amsterdam;
    let itinerary;

    beforeEach(()=>{
        dover = new Port("Dover")
        amsterdam = new Port("Amsterdam")
        itinerary = new Itinerary([dover, amsterdam])
        ship = new Ship(itinerary)
    })

    it('can set sail', () => {
        ship.setSail();
      
        expect(ship.previousPort.ships).not.toContain(ship)
        expect(ship.currentPort).toBeFalsy();
      });

    it("can\'t sail futher than itinerary", ()=>{
        const dover = new Port("Dover")
        const amsterdam = new Port("Amsterdam")
        const itinerary = new Itinerary([dover, amsterdam])
        const ship = new Ship(itinerary)

        ship.setSail();
        ship.dock();

        expect(()=> ship.setSail()).toThrowError("End of itinerary reached.");
        });

    it("can dock to another port", ()=>{
        const dover = new Port("Dover")
        const amsterdam = new Port("Amsterdam")
        const itinerary = new Itinerary([dover, amsterdam])
        const ship = new Ship(itinerary)

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(amsterdam)
        expect(ship.currentPort.ships).toContain(ship)

    })
})