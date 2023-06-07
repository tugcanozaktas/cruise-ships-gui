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
        
        window.setInterval(() => {document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
        backgroundIndex += 1;}, 1000);
    }
}




img0 = "../images/water0.png"
img1 = "../images/water1.png"
function moveBg(){
    let viewPort = document.querySelector("#viewport");
}
