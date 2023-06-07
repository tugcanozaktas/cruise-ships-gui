/* globals describe it expect */
const Ship = require("../src/Ship")

describe("Ship", ()=>{
    
    let dover;

    beforeEach(()=>{
        dover = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: "Dover",
            ships: []
        };

        itinerary = {
            ports: [dover]
        }

        ship = new Ship(itinerary)
    })

    it("can be instantiated", ()=>{
        expect(ship).toBeInstanceOf(Object)
    })

    it("has a starting port", ()=>{
        expect(ship.currentPort).toBe(dover)
    })
    
    it("gets added on instantation", ()=>{
        expect(dover.addShip).toHaveBeenCalledWith(ship);
    })
});


describe("with ports and itinerary", ()=>{
    let dover;
    let amsterdam;

    beforeEach(() => {
        dover = {
          addShip: jest.fn(),
          removeShip: jest.fn(),
          name: 'Dover',
          ships: []
        };
      
        amsterdam = {
          addShip: jest.fn(),
          removeShip: jest.fn(),
          name: 'Amsterdam',
          ships: []
        };
      
        itinerary = {
            ports: [dover, amsterdam]
        }
        ship = new Ship(itinerary);
      });

    it('can set sail', () => {
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(dover.removeShip).toHaveBeenCalledWith(ship);
    
    });

    it("can\'t sail futher than itinerary", ()=>{
        ship.setSail();
        ship.dock();

        expect(()=> ship.setSail()).toThrowError("End of itinerary reached.");
        });

    it("can dock to another port", ()=>{
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(amsterdam)
        expect(amsterdam.addShip).toHaveBeenCalledWith(ship)

    })
})