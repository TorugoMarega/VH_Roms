 function doalert(obj) {
        tempUrl = obj.getAttribute("href")
        console.log(tempUrl)
        sessionStorage.clear
        sessionStorage.setItem("tempUrl", tempUrl)
        console.log(sessionStorage)
        window.location = './jogar.html'
        return false;
    }