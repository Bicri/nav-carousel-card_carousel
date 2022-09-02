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