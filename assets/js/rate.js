//import { database } from "./firebase.js";


/*  function test(){
  var rom_ref = database.ref('roms/nintendo')
  rom_ref.on('value', function (snapshot) {
    var databaseRoms = snapshot.val()

    for(var counter = 0; counter<databaseRoms.length; counter++){
      console.log(databaseRoms[counter])
    }
    alert("sadasdas")
  })
}
 */
/* var elements = document.getElementsByClassName("likeLabel");
var elementsCheck = document.getElementsByClassName("likeCheck");

var myFunction = function() {
   console.log("funcionou")
};

for (var i = 0; i < elements.length; i++) {
    elementsCheck[i].addEventListener('change', myFunction, false);
} */
function setLike() {
  alert("funcionou")
}

var likeBtn = document.getElementById("likeBtn")
likeBtn.addEventListener('click', setLike, false);

