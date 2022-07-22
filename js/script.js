var slider = window.document.getElementById("slidershow")
let interval = 2000

function slider1(){
    slider.src= "./imagens/img-vander1.png";
    setInterval(slider2,interval);
}

function slider2(){
    slider.src = "./imagens/img-vander2.png";
    setInterval(slider3,interval);
    
}

function slider3(){
    slider.src = "./imagens/img-vander3.png";
    setInterval(slider1,interval);
    
}

