//--- SECCION DEL MENU ---------------------------------
    //Variables
    const header = document.querySelector('.header');
    const hamburguer = document.querySelector('.hamburguer');
    const nav = document.querySelector('.nav');

    const alturaInicial = getAltura(header);

    //Listeners
    document.addEventListener('DOMContentLoaded', init);
    hamburguer.addEventListener('click', menu);

    //Funciones
    function init(){
        //Calcula la altura del header --> Necesario para la animación del menu
        setAltura(header, getAltura(header));
        
        //Carousel
        posicionInicial(100); //posicionandolos
        reproducirSlides(); //automaticamente  
    }

    function menu(){
        //El atributo permitirá saber el estado del nav
        if(header.getAttribute("data-collapsed") === "false"){
            header.setAttribute("data-collapsed", true);
            setAltura(header, ( getAltura(nav) + alturaInicial) );
        }else{
            header.setAttribute("data-collapsed", false);
            setAltura(header, alturaInicial);
        }

        nav.classList.toggle('nav--collapsed');
        document.querySelector('.hamburguer__btn').classList.toggle('hamburguer__btn--collapsed')
    }

    function setAltura(elemento, altura){
        elemento.style.height = `${altura}px`;
    }

    function getAltura(elemento){
        return elemento.clientHeight;
    }

//-------------------------------------------------------------------------------------------------

//-- SECCION DEL CAROUSEL ---------------------------------------

    const slides = document.querySelectorAll('.carousel__slide');
    const next = document.querySelector(".carousel__next");
    const prev = document.querySelector(".carousel__prev");

    let slideActual = 0;
    let slidesTotal = slides.length - 1 ;

    next.addEventListener("click", siguienteImagen);
    prev.addEventListener("click", anteriorImagen);



    function anteriorImagen(){

        slideActual = slideActual === 0 ? slidesTotal : slideActual-1;

        moverCarousel(slides, 100, slideActual);
    }

    function siguienteImagen(){

        slideActual = slideActual === slidesTotal ? 0 : slideActual+1;

        moverCarousel(slides, 100, slideActual);
    }

    function moverCarousel(carousel, tamX, posicionActual){
        carousel.forEach( (slide, i) => {
            slide.style.transform = `translateX(${(tamX * (i-posicionActual))}%)`;
        } )
    }

    function reproducirSlides(){
        setInterval(() => {
            siguienteImagen();
        }, 3500);
    }

    function posicionInicial(longitud){

        //organiza el carousel
        slides.forEach( (slide, i) => {
            slide.style.transform = `translateX(${i * longitud}%)`
        } );

        //Permite invisibilizar como se acomoda el carousel
        setTimeout(() => {
            slides.forEach( (slide, i) => {
                slide.classList.remove("carousel__slide--hidden");
            } );
        }, 400);   
    }

//-- FIN CAROUSEL -----------------------------------------------
