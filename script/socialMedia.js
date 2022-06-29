// ---------------------------------------------------------
// DECLARATION DES VARIABLES
// ---------------------------------------------------------
let smMediaQuery = window.matchMedia("(min-width: 576px)")
let socialMedia = ['Facebook','Instagram','Twitter']
let socialMediaIcon =['facebook', 'instagram','twitter']
let divMedia = document.querySelector('#divMedia')

// ---------------------------------------------------------
// DECLARATION DES FONCTIONS
// ---------------------------------------------------------
function populateSocialMediaMobile(){
  for(let i =0; i<socialMedia.length;i++){
    let icoHTML = `<i class="bi bi-${socialMediaIcon[i]}"></i>`
    divMedia.children[i].innerHTML = `${icoHTML}`
  };
}
function populateSocialMedia(){
  for(let i =0; i<socialMedia.length;i++){
    let icoHTML = `<i class="bi bi-${socialMediaIcon[i]}"></i>`
    divMedia.children[i].innerHTML = `${icoHTML}  ${socialMedia[i]}`
  };
}

// ---------------------------------------------------------
// LANCEMENT DES FONCTIONS
// ---------------------------------------------------------

if(smMediaQuery.matches){
  populateSocialMedia()
}else{
  populateSocialMediaMobile()
}

smMediaQuery.addEventListener("change",()=>{
  if(smMediaQuery.matches){
    populateSocialMedia()
  }else{
    populateSocialMediaMobile()
  }
})
