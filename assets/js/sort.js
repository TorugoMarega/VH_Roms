import { database } from "./firebase.js";
import { getCardNintendo} from "./firebase.js";


var allCardsNintendo = '';
var allCardsAtari = '';
var cardNintendo = '';
var cardAtari = '';
var catalogoNintendo = document.getElementById("catalogoNintendo")
var catalogoAtari = document.getElementById("catalogoAtari")

//-----------------------------------ADICIONA TITULO E BOTÃO DE ORDENAÇÃO-----------------
var tituloRomSection = document.getElementById("tituloRomSection")
tituloRomSection.innerHTML = `

  <h2>Roms</h2>
  <input type="checkbox" name="Sort" id="sortBtn"><label id="labelSortBtn" for="sortBtn">Sort <i class="fas fa-sort-alpha-down"></i></label>

` 
var sortBtn = document.querySelector("#sortBtn")

//função que pega os dados no firebase e monta os cards de forma ordenada pelo título
function getCardNintendoSort() {
    var rom_ref = database.ref('roms/nintendo')
    allCardsNintendo =` `
  
    
    rom_ref.on('value', function (snapshot) {
      
      var databaseRoms = snapshot.val()
      for (var i = 0; i < databaseRoms.length; i++) {
        //--------------------FUNÇÃO PARA ORDENAR O ARRAY DE OBJETOS -----------------------
  
        function sortRom() {
          databaseRoms.sort(function (a, b) {
            return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
          })
        }
        sortRom()
        cardNintendo =`
        <div id="romId_${i}" class="rom nintendo">
          <img src="${databaseRoms[i].cover}" alt="">
          <h3>${databaseRoms[i].title}</h3>
          <p>${databaseRoms[i].publisher}</p>
          <p>Ano:${databaseRoms[i].year}</p>
          <div class="caixaPlay">
          <a href="${databaseRoms[i].review}"><button><i class="fas fa-info-circle"></i> Info</button></a>
          <a title="${databaseRoms[i].title}" name="${databaseRoms[i].cover}" href="${databaseRoms[i].rom_url}"  onclick="sessionStorageRomRef(this); return false;"><button class="play"><i class="fas fa-gamepad icon"></i> Play</button></a>
          <input onclick="setLike()" type="checkbox" name="likeCheck_${i}" id="likeCheck_${i}" class="likeCheck">
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
    })
  }
  
  sortBtn.addEventListener('change', function() {
    if (this.checked) {
      getCardNintendoSort()
    } else {
      getCardNintendo()
    }
  });