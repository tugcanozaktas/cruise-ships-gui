/* globals describe it expect */
const Port = require("../src/Port")

describe("Port", ()=>{
    it("can be instantated", ()=>{
        expect(new Port()).toBeInstanceOf(Object);
    })

    it("has a name", ()=>{
        const port = new Port("Berlin")

        expect(port.name).toBe("Berlin")
    })
})