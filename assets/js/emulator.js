// TROCA O TITLE DA PAGINA PARA O NOME DO JOGO ARMAZENADO NO SESSIONSTORAGE
//CONCATENA O NOME
document.title =sessionStorage.tempTitle+" "+"| Jogar"

var emulator = document.getElementById("emulator");
var gameTitle = document.getElementById("gameTitle")

//------------------ADICIONA O TITULO DO JOGO ARMAZENADO NO SESSIONSTORAGE
gameTitle.innerHTML=`${sessionStorage.tempTitle}`

var NepPlayer = "#emulator";     
// ID of html element where emulator will be inserted
 
var NepEmu = "snes"; 
// Super Nes
 
var NepLang = "ptBR";
// Portuguese-BR
// Interface language of emulator. EN by default
 

var NepMaxWidth = "700px" 
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
