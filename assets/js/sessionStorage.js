
//-----------------ARMAZENA O LINK, TITLE E CAPA DA ROM AO CLICAR NO BOTÃO PLAY----------------
function sessionStorageRomRef(obj) {
        tempUrl = obj.getAttribute("href")
        tempTitle = obj.getAttribute("title")
        tempCover = obj.getAttribute("name")
        tempId = obj.getAttribute("id")
        sessionStorage.clear
        sessionStorage.setItem("tempUrl", tempUrl)
        sessionStorage.setItem("tempTitle", tempTitle)
        sessionStorage.setItem("tempCover", tempCover)
        sessionStorage.setItem("tempId", tempCover)
        
        //REDIRECIONA PARA A PAGINA DE JOGO PARA SER MONTADA DINAMICAMENTE A PARTIR DOS DADOS DO SESSIONSTORAGE
        window.location = './jogar.html'
        //console.log(sessionStorage)
        return false;
    };

