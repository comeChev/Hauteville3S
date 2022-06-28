let myModal = new bootstrap.Modal(document.querySelector("#modalContact"), {});
let buttonModal = document.querySelector("#btnContact")
let mdMediaQuery = window.matchMedia("(min-width: 768px)")
let eventTarget = document.querySelector("#eventTarget")
let myDataEvent=[];

// on récupére les donnnées du fichier JSON
fetch("./json/dataEvent.json")
.then(function(response){
  // on récupère la réponse et on la rend lisible en JS
  return response.json();
})
.then(function(response2){
  // on récupère les données lisibles et on les affiche dans la console
  myDataEvent = response2
  //console.log(myDataEvent)
})

// fonction pour créer des objets HTML en fonction des datas
function populateMobile(){
  eventTarget.innerHTML = ""
  myDataEvent.forEach(event => {
  eventTarget.innerHTML += `<div class=" card col-12 m-2">
  <div class=" card-body ps-2 pe-2 col-12 bg-white text-dark rounded">
  <h3 class="card-title mainFontFam">${event.nameEvent}</h3>
  <h6 class="card-subtitle secondaryFontFam">${event.dateEvent}</h6>
  <p class="card-text thirdFontFam">${event.descEvent}</p>
  <button class="btn btn-orange float-end mainFontFam">S'incrire</button>
  </div>
  </div>`
 });
}
function populate(){
    if (!myDataEvent=="" |!myDataEvent==null){
    console.log(`ca va charger`)
    eventTarget.innerHTML = ""
    myDataEvent.forEach(event => {
    eventTarget.innerHTML += `<div class="col-md-4 col-lg-3 pb-2 pt-2">
    <div class="card text-dark bg-light card-size">
    <img class="card-img-top" src= ${event.imgEvent}>
    <div class="card-body position-relative">
    <h3 class="card-title mainFontFam">${event.nameEvent}</h3>
    <h6 class="card-subtitle secondaryFontFam">${event.dateEvent}</h6>
    <p class="card-text thirdFontFam pb-4">${event.descEvent}</p>
    <button class="btn btn-orange btn-bot mainFontFam">S'incrire</button>
    </div>
    </div>
    </div>`
    })}
    else{console.log(`données vides`)}
    }
function showModal(){
  myModal.show();
}

populate()
buttonModal.addEventListener("click",showModal);
mdMediaQuery.addEventListener("change",()=>{
  if(mdMediaQuery.matches){
    populate()
  } else{
    populateMobile()
  }
});

  


