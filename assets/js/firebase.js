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
export var database = firebase.database()


/* ------------------objeto-rom--------------
*  Imagem                                    *
*  Titulo                                    *
*  Publisher                                 *
*  Ano de lançamento                         *
*  Url da rom                                *
----------------------------------------------
 */

//inicializa variaveis dos cartões com uma string vazia
var allCardsNintendo = '';
var allCardsAtari = '';
var cardNintendo = '';
var cardAtari = '';
var catalogoNintendo = document.getElementById("catalogoNintendo")
var catalogoAtari = document.getElementById("catalogoAtari")



//----------------------------------------------------NINTENDO-------------------------------------------

//função que pega os dados no firebase e monta os cards
export function getCardNintendo() {
    let i = 0;
    var rom_ref = database.ref('roms/nintendo')
    rom_ref.on('value', function (snapshot) {

    allCardsNintendo =` `
    var databaseRoms = snapshot.val()
    for (i = 0; i < databaseRoms.length; i++) {


      cardNintendo = `
      <div id="romId_${i}" class="rom nintendo">
        <img src="${databaseRoms[i].cover}" alt="">
        <h3>${databaseRoms[i].title}</h3>
        <p>${databaseRoms[i].publisher}</p>
        <p>Ano:${databaseRoms[i].year}</p>
        <div class="caixaPlay">
        <a href="${databaseRoms[i].review}"><button><i class="fas fa-info-circle"></i> Info</button></a>
        <a aria-details="${databaseRoms[i].cover}" id="id_${i}" title="${databaseRoms[i].title}" name="${databaseRoms[i].resenha}" href="${databaseRoms[i].rom_url}" onclick="sessionStorageRomRef(this); return false;"><button class="play"><i class="fas fa-gamepad icon"></i> Play</button></a>
        <input type="checkbox" name="likeCheck" id="likeCheck_${i}" class="likeCheck">
        <label for="likeCheck_${i}" class="likeLabel">
        <div><i class="fas fa-heart"></i>${databaseRoms[i].rating}/5</div>
        </label>
        </div>            
        </div> 
  `

  allCardsNintendo += cardNintendo;
  catalogoNintendo.innerHTML = allCardsNintendo
  //console.log(databaseRoms[i])
}

//console.log(databaseRoms[2])
})
}
getCardNintendo();





