const btnPageMap = document.getElementById('btnPageMap');


/* ----------------------------------PAGEMAP MOBILE--------------------------------------------- */
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