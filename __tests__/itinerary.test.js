const Itinerary = require("../src/itinerary")
const Port = require("../src/Port")

describe("itinerary", ()=>{
    it("should be initialized", ()=>{
        expect(new Itinerary()).toBeInstanceOf(Object)
    })

    it("should have ports", ()=>{
        const dover = new Port("Dover")
        const amsterdam = new Port("Dover")

        const itinerary = new Itinerary([dover, amsterdam]);

        expect(itinerary.ports).toEqual([dover, amsterdam])
    })
})