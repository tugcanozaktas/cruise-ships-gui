const Itinerary = require("../src/itinerary")

describe("itinerary", ()=>{
    it("should be initialized", ()=>{
        expect(new Itinerary()).toBeInstanceOf(Object)
    })

    it("should have ports", ()=>{
        const dover = jest.fn();
        const amsterdam = jest.fn();

        const itinerary = new Itinerary([dover, amsterdam]);

        expect(itinerary.ports).toEqual([dover, amsterdam])
    })
})