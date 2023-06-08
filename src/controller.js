(function exportController(){
    function Controller(){
        this.initialiseSea();
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
        }
    }

    if(typeof module !== "undefined" && module.exports){
        module.exports = Controller
    } else {
        window.Controller = Controller
    }
}());