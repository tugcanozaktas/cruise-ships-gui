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

    it("can add ships", ()=>{
        const berlin = new Port("Berlin")
        const itinerary = new Itinerary([berlin])
        const berlinShip = new Ship(itinerary)

        expect(berlin.ships).toContain(berlinShip)

    })

    it("can remove ships", ()=>{
        const berlin = new Port("Berlin")
        const itinerary = new Itinerary([berlin])
        const berlinShip = new Ship(itinerary)

        berlin.removeShip(berlinShip)

        expect(berlin.ships).not.toContain(berlinShip)

    })
})