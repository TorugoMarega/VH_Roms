
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
  
  
  var rom_ref = database.ref('nintendo')
  rom_ref.on('value', function (snapshot) {
    var databaseRoms = snapshot.val()
  })
  
  //função que pega os dados no firebase e monta os cards
  function getCardNintendo() {
    var rom_ref = database.ref('nintendo')
    rom_ref.on('value', function (snapshot) {
      var databaseRoms = snapshot.val()
  
      for (let i = 0; i < databaseRoms.length; i++) {
  
        cardNintendo = `
          <div id="romId_${i}" class="rom nintendo">
            <img src="${databaseRoms[i].cover}" alt="">
            <h3>${databaseRoms[i].title}</h3>
            <p>${databaseRoms[i].publisher}</p>
            <p>Ano:${databaseRoms[i].year}</p>
            <div class="caixaPlay">
                <button><a href="${databaseRoms[i].review}"><i class="fas fa-info-circle"></i> Info</a></button>
                <button onclick = "getRomRef(this)"><a href=""><i class="fas fa-gamepad icon"></i> Play</a></button>
            </div>            
      </div> 
    `
  
        allCardsNintendo += cardNintendo;
        catalogoNintendo.innerHTML = allCardsNintendo
        //console.log(databaseRoms[i])
  
        //-----------------------------------------------
        //variaveis auxiliares para utilizar o emulador
  /*       var gameRefEmu = document.getElementById("romId_"+i)
        console.log(gameRefEmu) */
        
        
        //----------------------------------------------
  /*       function getRomRef() {
          console.log(gameTitleRef = databaseRoms[i].title)
        }
        getRomRef() */
      }
    })
  }
  getCardNintendo()
  
  function getRomRef(obj){
    var id = obj.id
    alert(id)
  }
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
  
  
  
  function play (){
     gameTitleRef = dataNintendo[0].title
     export default gameTitleRef;
  } */
  
  //----------------------------------------------STORAGE---------------------------------------
  
  /* import { getStorage } from "firebase/storage";
  var storage = firebase.storage();
  var gsReference = storage.refFromURL('gs://vhroms-7417c.appspot.com/snes/Super Mario World (U) [!].smc');
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
  