/* function updateData(){
  var rom_ref = database.ref('roms/nintendo')
  update(ref(rom_ref),{
    rating: 10
  })
}
updateData() */
/* var elements = document.getElementsByClassName("likeLabel");
var elementsCheck = document.getElementsByClassName("likeCheck");

var myFunction = function() {
   console.log("funcionou")
};

for (var i = 0; i < elements.length; i++) {
    elementsCheck[i].addEventListener('change', myFunction, false);
} */


/* function setLike() {
  alert("funcionou")
}

var likeBtn = document.getElementById("likeBtn")
likeBtn.addEventListener('click', setLike, false); */

const shareData = {
  title: 'VH Roms',
  text: 'Saiba mais sobre jogos antigos e emulação',
  url: 'http://torugo.mypressonline.com/VHRomsApp/roms.html'
}

const btn = document.querySelector('#checkShare');
const resultPara = document.querySelector('.result');

btn.addEventListener('click', async () => {
  try {
    await navigator.share(shareData)
  } catch(err) {
    resultPara.textContent = 'Error: ' + e
  }
  resultPara.textContent = 'Compartilhado com sucesso!'
});
