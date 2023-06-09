(function exportController(){
    function Controller(ship){
        this.ship = ship

        this.initialiseSea();


        document.querySelector("#sailbutton").addEventListener("click", ()=>{
            this.setSail();
        });
    }
    
    Controller.prototype = {
        initialiseSea(){
            const backgrounds = [
                './images/water0.png',
                './images/water1.png',
              ];
            let backgroundIndex = 0;
            
            window.setInterval(() => {
                document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
            
                backgroundIndex += 1;}
                ,1000);
        },

        renderPorts(ports){

            const portsElement = document.querySelector("#ports");
            
            let startWidth = 0;
            portsElement.style.width = `${startWidth}px`;
            
            ports.forEach(port => {
                let newPort = document.createElement("div")
                newPort.classList.add("port");
                newPort.dataset.portIndex = ports.indexOf(port);

                startWidth += 256;
                portsElement.style.width = `${startWidth}px`;
                portsElement.appendChild(newPort);

                
            });
        },

        renderShip(){
            const ship = this.ship;

            const currPortIndex = ship.itinerary.ports.indexOf(ship.currentPort)
            const portDiv = document.querySelector(`[data-port-index='${currPortIndex}'`)


            const shipDiv = document.querySelector("#ship");

            shipDiv.style.top = `${portDiv.offsetTop+20}px`
            shipDiv.style.left = `${portDiv.offsetLeft-20}px`
        },

        setSail(){
            const ship = this.ship;

            const currPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const nextPortIndex = currPortIndex + 1;

            const nextPortDiv = document.querySelector(`[data-port-index='${nextPortIndex}'`)

            if(!nextPortDiv){
                return alert("End of the itinerary!")
            }


            const shipDiv = document.querySelector("#ship");
            const interval = setInterval(()=>{
                const shipLeft = parseInt(shipDiv.style.left, 10);
                if(shipLeft === (nextPortDiv.offsetLeft - 20)){
                    ship.setSail();
                    ship.dock();
                    clearInterval(interval);
                }

                shipDiv.style.left = `${shipLeft + 1}px`
            }, 10)

        }
    }

    if(typeof module !== "undefined" && module.exports){
        module.exports = Controller
    } else {
        window.Controller = Controller
    }
}());