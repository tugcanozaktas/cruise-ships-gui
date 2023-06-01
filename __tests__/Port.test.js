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
    let berlin;
    let itinerary;
    let berlinShip;

    beforeEach(()=>{
        berlin = new Port("Berlin")
        itinerary = new Itinerary([berlin])
        berlinShip = new Ship(itinerary)
    })


    it("can add ships", ()=>{
        expect(berlin.ships).toContain(berlinShip)
    })

    it("can remove ships", ()=>{

        berlin.removeShip(berlinShip)
        expect(berlin.ships).not.toContain(berlinShip)

    });

    

})