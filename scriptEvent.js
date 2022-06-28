
let myModal = new bootstrap.Modal(document.querySelector("#modalContact"), {});
let buttonModal = document.querySelector("#btnContact")
let mdMediaQuery = window.matchMedia("(min-width: 768px)")
let eventTarget = document.querySelector("#eventTarget")
let myDataEvent=[];

function populateMobile(){
  fetch('./json/dataEvent.json')
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    myDataEvent=data
  })
  .then(()=>{
    eventTarget.innerHTML = ""
    myDataEvent.forEach(event => {
    eventTarget.innerHTML += `<div class="card shadow-card col-12 mb-4">
    <div class=" card-body ps-2 pe-2 col-12 bg-white text-dark rounded">
    <h3 class="card-title mainFontFam">${event.nameEvent}</h3>
    <h6 class="card-subtitle secondaryFontFam">${event.dateEvent}</h6>
    <p class="card-text thirdFontFam">${event.descEvent}</p>
    <button class="btn btn-orange float-end mainFontFam">S'incrire</button>
    </div>
    </div>`
    });
  })
}
function populate(){
  fetch('./json/dataEvent.json')
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    myDataEvent = data
  })
  .then(()=>{
    eventTarget.innerHTML = ""
    myDataEvent.forEach(event => {
    eventTarget.innerHTML += `<div class="col-md-4 col-lg-3 pb-2 pt-2">
    <div class="card animateCard text-dark bg-light card-size">
    <img class="card-img-top" src= ${event.imgEvent}>
    <div class="card-body position-relative">
    <h3 class="card-title mainFontFam">${event.nameEvent}</h3>
    <h6 class="card-subtitle secondaryFontFam">${event.dateEvent}</h6>
    <p class="card-text thirdFontFam pb-4">${event.descEvent}</p>
    <button class="btn btn-orange btn-bot mainFontFam">S'incrire</button>
    </div>
    </div>
    </div>`
    })
  })
}
function showModal(){
  myModal.show();
}


if(mdMediaQuery.matches){
  populate()
} else{
  populateMobile()
}
buttonModal.addEventListener("click",showModal);
mdMediaQuery.addEventListener("change",()=>{
  if(mdMediaQuery.matches){
    populate()
  } else{
    populateMobile()
  }
});

function underConstruction(){
  alert(`Cette page est en cours de construction. Veuillez nous excuser pour la gêne occasionnée.`)
}
  


