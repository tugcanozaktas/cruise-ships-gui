/* globals describe it expect */
const Itinerary = require("../src/itinerary");
const Port = require("../src/Port");
const Ship = require("../src/Ship");

describe("Port", ()=>{
    it("can be instantated", ()=>{
        expect(new Port()).toBeInstanceOf(Object);
    })

    it("has a name", ()=>{
        const port = new Port("Berlin")

        expect(port.name).toBe("Berlin")
    })
})

describe("for itinerary and ships", ()=>{
    let ship;
    let berlin;

    beforeEach(()=>{
        berlin = new Port("Berlin")
        ship = jest.fn()
        berlin.addShip(ship)
    })


    it("can add ships", ()=>{
        expect(berlin.ships).toContain(ship)
    })

    it("can remove ships", ()=>{

        berlin.removeShip(ship)
        expect(berlin.ships).not.toContain(ship)

    });

    

})