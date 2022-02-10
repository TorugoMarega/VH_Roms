
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//INFORMAÇÕES DA API
var firebaseConfig = {
  apiKey: "AIzaSyAwwM0JWxsCz3F3xw-aAa_G6-tVeoldVmU",
  authDomain: "vhroms-7417c.firebaseapp.com",
  databaseURL: "https://vhroms-7417c-default-rtdb.firebaseio.com",
  projectId: "vhroms-7417c",
  storageBucket: "vhroms-7417c.appspot.com",
  messagingSenderId: "454989664175",
  appId: "1:454989664175:web:c5e85583bf619c5defe95a",
  //  measurementId: "G-9T3DVW3E1N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database()


/* ------------------objeto-rom--------------
*  Imagem                                    *
*  Titulo                                    *
*  Publisher                                 *
*  Ano de lançamento                         *
----------------------------------------------
 */

//inicializa variaveis dos cartões com uma string vazia
var allCardsNintendo = '';
var allCardsAtari = '';
var cardNintendo = '';
var cardAtari = '';
var catalogoNintendo = document.getElementById("catalogoNintendo")
var catalogoAtari = document.getElementById("catalogoAtari")


//função que pega os dados no firebase e monta os cards


//----------------------------------------------------NINTENDO-------------------------------------------
let i = 0;
var rom_ref = database.ref('roms/nintendo')
function getCardNintendo() {
  rom_ref.on('value', function (snapshot) {
    var databaseRoms = snapshot.val()

    for (i = 0; i < databaseRoms.length; i++) {

      cardNintendo = `
        <div id="romId_${i}" class="rom nintendo">
          <img src="${databaseRoms[i].cover}" alt="">
          <h3>${databaseRoms[i].title}</h3>
          <p>${databaseRoms[i].publisher}</p>
          <p>Ano:${databaseRoms[i].year}</p>
          <div class="caixaPlay">
              <button><a href="${databaseRoms[i].review}"><i class="fas fa-info-circle"></i> Info</a></button>
              <button class="play"><a href="${databaseRoms[i].rom_url}"  onclick="doalert(this); return false;"><i class="fas fa-gamepad icon"></i> Play</a></button>
              
          </div>            
    </div> 
  `


      allCardsNintendo += cardNintendo;
      catalogoNintendo.innerHTML = allCardsNintendo
      //console.log(databaseRoms[i])
    }
  })
}
getCardNintendo();

//----------------------------------------------------ATARI-------------------------------------------

/* function getCardAtari() {
  var rom_ref = database.ref('atari')
  rom_ref.on('value', function (snapshot) {
    var databaseRoms = snapshot.val()


    for (let i = 0; i < databaseRoms.length; i++) {

      cardAtari =`
      <div class="rom atari">
        <img src="${databaseRoms[i].cover}" alt="">
        <h3>${databaseRoms[i].title}</h3>
        <p>${databaseRoms[i].publisher}</p>
        <p>Ano:${databaseRoms[i].year}</p>
        <div class="caixaPlay">
            <button><a href="${databaseRoms[i].review}""><i class="fas fa-info-circle"></i> Info</a></button>
            <button><a href="./jogar.html"><i class="fas fa-gamepad icon"></i> Play</a></button>
        </div>
  </div>
`

      allCardsAtari += cardAtari;
      catalogoAtari.innerHTML = allCardsAtari
      console.log(databaseRoms[i])
    }
  })
}
getCardAtari()
 */
/*
//---------------------------------------------------------------------------------------------




//----------------------------------------------STORAGE---------------------------------------

/* var storage = firebase.storage();
var storageRef = storage.ref();

var romRef = storageRef.child('roms')
var nintendoRef = romRef.child('nintendo')
var snesRef = nintendoRef.child('snes')
var gameRef= snesRef.child('Super Mario World (U) [!].zip').getDownloadURL()

  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  })
  .catch((error) => {
    // Handle any errors
  });



   console.log(gameRef) 
 */


//------------------------------------- COM JSON PARSE ------------------------------------------------

//var catalogo = document.getElementById("catalogo")

//a string json é convertida em objeto json
//const rom = JSON.parse(database)
/* var card;
var allCards = '';
 for (i=0; i<rom.nintendo.length; i++){

    card =`<div class="rom">
    <img src="${rom.nintendo[i].cover}" alt="">
    <h3><a href="${rom.nintendo[i].review}">${rom.nintendo[i].title}</a></h3>
    <p>${rom.nintendo[i].publisher}</p>
    <p>Ano:${rom.nintendo[i].year}</p>
    </div>`

    allCards += card
    catalogo.innerHTML = allCards
}

 */
