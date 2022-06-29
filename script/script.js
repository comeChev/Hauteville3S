// ---------------------------------------------------------
// DECLARATION DES VARIABLES
// ---------------------------------------------------------
let myModal = new bootstrap.Modal(document.querySelector("#modalContact"), {});
let buttonModal = document.querySelector("#btnContact")
let lgMediaQuery = window.matchMedia("(min-width: 992px)")
let mapSituation = document.querySelector("#mapSituation")
let openingHours = document.querySelector("#openingHours")

// ---------------------------------------------------------
// DECLARATION DES FONCTIONS
// ---------------------------------------------------------

function showMap(lgMediaQuery){
  if(lgMediaQuery.matches){
    mapSituation.innerHTML = '<iframe id="mapGoogle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.9189906535294!2d5.58919853488769!3d45.97287750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b5d9179ad1795%3A0xe769d9dce3608188!2sHauteville%203s!5e0!3m2!1sen!2sfr!4v1656317221385!5m2!1sen!2sfr" class="rounded" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    openingHours.removeChild(openingHours.lastChild)
  }
  else{
    mapSituation.innerHTML=""
    let joinMap = document.createElement("div")
    joinMap.setAttribute(
      "class",
      "p-2"
    )
    joinMap.innerHTML = `
    <a id="buttonMap" class="btn btn-orange mainFontFam" href="https://www.google.com/maps?ll=45.972878,5.593576&z=16&t=m&hl=en&gl=FR&mapclient=embed&cid=16675098638046757256" target="_blank" aria-label="Plan Hauteville 3S">Venez nous rendre visite</a>`
    openingHours.appendChild(joinMap)
  }
}
function showModal(){
  myModal.show();
}
function underConstruction(){
  alert(`Cette page est en cours de construction. Veuillez nous excuser pour la gêne occasionnée.`)
}

// ---------------------------------------------------------
// LANCEMENT DES FONCTIONS
// ---------------------------------------------------------


//document.onreadystatechange = setTimeout(showModal,1000)
//buttonModal.addEventListener("click",showModal);
showMap(lgMediaQuery);

lgMediaQuery.addEventListener("change",showMap);


  


