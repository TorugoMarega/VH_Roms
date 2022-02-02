/* ----------------------------------SCROLL HEADER--------------------------------------------- */

window.onscroll=function(){
    scrollHeader()
};

var menuStyle = document.getElementById("menu").style;
var headerStyle = document.getElementsByTagName("header")[0].style;
var navStyle = document.getElementById("nav").style;

function scrollHeader(){
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerStyle.padding="0px 10px"
        menuStyle.top = "50px"

    }

    else{
        headerStyle.padding="25px 10px"
        menuStyle.top = "80px"
        navStyle.top = "500px"
    }
}





/* ----------------------------------PAGEMAP MOBILE--------------------------------------------- */
const btnPageMap = document.getElementById('btnPageMap');
function showPageMap(){
    var pageMap = document.getElementById("boxPageMap")
    pageMap.style.left = "30px"
    btnPageMap.style.background = "rgba(22, 152, 228, 0.767)"
    console.log("MOSTRA")    
}


/* ----------------------------------MENU MOBILE--------------------------------------------- */
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type=='touchstart') event.preventDefault()
    const nav = document.getElementById( 'nav');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);










/* function toggleMenu(event){
 
    if (event.type=='touchstart')
        event.preventDefault()
        const nav = document.getElementById('nav-mobile');
        nav.classList.toggle('active');     
    }


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu, ); */