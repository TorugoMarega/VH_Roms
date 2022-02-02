
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
var cardNintendo= '';
var cardAtari= '';
var catalogoNintendo = document.getElementById("catalogoNintendo")
var catalogoAtari = document.getElementById("catalogoAtari")

//função que pega os dados no fire base e monta os cards
function getCardNintendo(){
    var user_ref=database.ref('nintendo')
    user_ref.on('value', function(snapshot){
    var dataNintendo =snapshot.val()
    
    
    for (let i=0; i<dataNintendo.length; i++){

      cardNintendo =`<div class="rom nintendo">
      <img src="${dataNintendo[i].cover}" alt="">
      <h3><a href="${dataNintendo[i].review}">${dataNintendo[i].title}</a></h3>
      <p>${dataNintendo[i].publisher}</p>
      <p>Ano:${dataNintendo[i].year}</p>
      </div>`
      
      allCardsNintendo += cardNintendo;
      catalogoNintendo.innerHTML = allCardsNintendo
      //console.log(dataNintendo[i])
    }
  })
}
getCardNintendo()

function getCardAtari(){
  var user_ref=database.ref('atari')
  user_ref.on('value', function(snapshot){
  var dataNintendo =snapshot.val()
  
  
  for (let i=0; i<dataNintendo.length; i++){
    cardAtari =`<div class="rom atari">
    <img src="${dataNintendo[i].cover}" alt="">
    <h3><a href="${dataNintendo[i].review}">${dataNintendo[i].title}</a></h3>
    <p>${dataNintendo[i].publisher}</p>
    <p>Ano:${dataNintendo[i].year}</p>
    </div>`
    
    allCardsAtari += cardAtari;
    catalogoAtari.innerHTML = allCardsAtari
    console.log(dataNintendo[i])
  }
})
}
getCardAtari()

 
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
