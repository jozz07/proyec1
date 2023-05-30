const carrusel = document.querySelector(".carrusel-items");

let intervalo = null;

const start = () => {
intervalo = setInterval(function () {
	carrusel.scrollLeft = carrusel.scrollLeft + 20;
}, 10);
};

const stop = () =>{
	
};


start();

