// ---------------------------------------------------------
// DECLARATION DES VARIABLES
// ---------------------------------------------------------
let myModal = new bootstrap.Modal(document.querySelector("#modalContact"), {});
let buttonModal = document.querySelector("#btnContact")
let mdMediaQuery = window.matchMedia("(min-width: 768px)")
let eventTargetNow = document.querySelector("#eventTargetNow")
let eventTargetPast = document.querySelector("#eventTargetPast")
let targetEventsPast = document.querySelector("#targetEventsPast")
let targetEventsNow = document.querySelector("#targetEventsNow")
let myDataEvent=[];
let myDataEventNow=[];
let myDataEventPast=[];
let dateNow= new Date()

// ---------------------------------------------------------
// DECLARATION DES FONCTIONS
// ---------------------------------------------------------

function sortArrayDate (array){
  array.sort((a,b)=>{
    return new Date(a.dateEvent) - new Date(b.dateEvent)
  })
}
function underConstruction(){
  alert(`Cette page est en cours de construction. Veuillez nous excuser pour la gêne occasionnée.`)
}
function showModal(){
  myModal.show();
}
function populateMobile(){
  eventTargetNow.innerHTML = ""
  myDataEventNow.forEach(event => {
    let dateEvent = new Date(event.dateEvent)
    eventTargetNow.innerHTML += `<div class="card shadow-card col-12 mb-4">
    <div class=" card-body ps-2 pe-2 col-12 bg-white text-dark rounded">
    <h3 class="card-title mainFontFam">${event.nameEvent}</h3>
      <h6 class="card-subtitle secondaryFontFam">${dateEvent}</h6>
      <p class="card-text thirdFontFam">${event.descEvent}</p>
      <button class="btn btn-orange float-end mainFontFam">S'incrire</button>
      </div>
      </div>`
    });
    eventTargetPast.innerHTML=""
    myDataEventPast.forEach(event => {
      let dateEvent = new Date(event.dateEvent)
      eventTargetPast.innerHTML += `<div class="card shadow-card col-12 mb-4">
      <div class=" card-body ps-2 pe-2 col-12 bg-white text-dark rounded">
      <h3 class="card-title mainFontFam">${event.nameEvent}</h3>
      <h6 class="card-subtitle secondaryFontFam">${dateEvent}</h6>
      <p class="card-text thirdFontFam">${event.descEvent}</p>
      <button class="btn btn-orange float-end mainFontFam">S'incrire</button>
      </div>
      </div>`
    });

  }
function populate(){
  eventTargetNow.innerHTML = ""
  myDataEventNow.forEach(event => {
    let dateEvent = new Date(event.dateEvent)
    eventTargetNow.innerHTML += `<div class="col-md-4 col-lg-3 pb-2 pt-2">
    <div class="card animateCard text-dark bg-light card-size">
    <img class="card-img-top" src= ${event.imgEvent}>
    <div class="card-body position-relative">
    <h3 class="card-title mainFontFam">${event.nameEvent}</h3>
    <h6 class="card-subtitle secondaryFontFam">${dateEvent}</h6>
    <p class="card-text thirdFontFam pb-4">${event.descEvent}</p>
    <button class="btn btn-orange btn-bot mainFontFam">S'incrire</button>
    </div>
    </div>
    </div>`
  })
  eventTargetPast.innerHTML = ""
  myDataEventPast.forEach(event => {
    let dateEvent = new Date(event.dateEvent)
    eventTargetPast.innerHTML += `<div class="col-md-4 col-lg-3 pb-2 pt-2">
    <div class="card animateCard text-dark bg-light card-size">
    <img class="card-img-top" src= ${event.imgEvent}>
    <div class="card-body position-relative">
    <h3 class="card-title mainFontFam">${event.nameEvent}</h3>
    <h6 class="card-subtitle secondaryFontFam">${dateEvent}</h6>
    <p class="card-text thirdFontFam pb-4">${event.descEvent}</p>
    <button class="btn btn-orange btn-bot mainFontFam">S'incrire</button>
    </div>
    </div>
    </div>`
  })
}
async function loadPage(){
  if(mdMediaQuery.matches){
    populate()
  } else{
    populateMobile()
  }
}
async function populateData(){
  let response = await fetch("./json/dataEvent.json")
  let dataJson = await response.json()
  // on charge les données JSON dans un array
  myDataEvent = dataJson
  // depuis le 1er array on alimente les array PAST et NOW
  myDataEvent.forEach(element => {
    let dateElement = new Date(element.dateEvent)
    if (dateElement < dateNow){
      myDataEventPast.push(element)
    } else{
      myDataEventNow.push(element)
    }
  })
  // on trie les array PAST et NOW en fonction des dates
  sortArrayDate(myDataEventNow);
  sortArrayDate(myDataEventPast)
  let loadingPage = await loadPage()
  loadPage()
}
function addChevron(target, targetTitle){
  let titleTarget = targetTitle.children[0]
  if(!target.classList.contains('collapsed-event')){
    target.classList.add('collapsed-event')
    if(titleTarget.classList.contains('chevron-up')){
      titleTarget.classList.remove('chevron-up')
      titleTarget.classList.add('chevron-down')
    } else{
      titleTarget.classList.add('chevron-down')
    }
  } else {
    target.classList.remove('collapsed-event')
    if(titleTarget.classList.contains('chevron-down')){
      titleTarget.classList.remove('chevron-down')
      titleTarget.classList.add('chevron-up')
    } else{
      titleTarget.classList.add('chevron-up')
    }
  }
}
// ---------------------------------------------------------
// LANCEMENT DES FONCTIONS
// ---------------------------------------------------------

// chargement de la page
populateData()
// écouteur d'évenement pour l'ouverture de la modale
buttonModal.addEventListener("click",showModal);
// écouteur d'événement sur le clic de targetEventsPast
targetEventsPast.addEventListener('click', ()=>{
  addChevron(eventTargetPast,targetEventsPast)
})
// écouteur d'événement sur changement de mediaQuery
mdMediaQuery.addEventListener("change",()=>{
  if(mdMediaQuery.matches){
    populate()
  } else{
    populateMobile()
  }
});


