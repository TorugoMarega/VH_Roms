

// TROCA O TITLE DA PAGINA PARA O NOME DO JOGO ARMAZENADO NO SESSIONSTORAGE
//CONCATENA O NOME
document.title =sessionStorage.tempTitle+" "+"| Jogar"

var emulator = document.getElementById("emulator");
var gameTitle = document.getElementById("gameTitle")

//------------------ADICIONA O TITULO DO JOGO ARMAZENADO NO SESSIONSTORAGE
gameTitle.innerHTML=`${sessionStorage.tempTitle}`


//------------------ADICIONA A RESENHA DO JOGO----------------------------
var resenhaTitle = document.getElementById("resenhaTitle")
var resenhaParagrafo = document.getElementById("resenhaParagrafo")
resenhaTitle.innerHTML=`${sessionStorage.tempTitle}`
resenhaParagrafo.innerHTML = `${sessionStorage.tempResenha}`

var NepPlayer = "#emulator";     
// ID of html element where emulator will be inserted
 
var NepEmu = "snes"; 
// Super Nes
 
var NepLang = "ptBR";
// Portuguese-BR
// Interface language of emulator. EN by default


//------------------CALCULA A RESOLUÇÃO DE TELA E PASSA AO EMULADOR
var maxWidthClient
if (screen.width >= 1440){
    maxWidthClient = screen.width-200
} else if(screen.width < 960){
    maxWidthClient = screen.width-100
} else if (screen.width < 1440 && screen.width > 1280){
    maxWidthClient = screen.width-700
} else if (screen.width < 1280){
    maxWidthClient = screen.width-300
}
var NepMaxWidth = maxWidthClient+"px"
// Maximum width size of emulator. 960px by default


var NepColor = "#D111E0";
//Color UI elements.Blue by default

//----------------------------------------GAME LOCAL FILES----------------------------

//------------------ADICIONA O LINK DA CAPA DO JOGO ARMAZENADO NO SESSIONSTORAGE
var boxartimg = "<img src="+sessionStorage.tempCover+"/>"
// You cant add box art img on start screen

//--------------------RECUPERA A URL SALVA NO SESSIONSTORAGE E PASSA PARA O EMULADOR--------------------
var gameUrl = sessionStorage.tempUrl
// Game Url
var NepZoom = "enable"; 


