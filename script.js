let myModal = new bootstrap.Modal(document.querySelector("#modalContact"), {});
let buttonModal = document.querySelector("#btnContact")
let lgMediaQuery = window.matchMedia("(min-width: 992px)")
let mapSituation = document.querySelector("#mapSituation")
let eventTarget = document.querySelector("#eventTarget")
let myDataEvent=[]

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
function populate(lgMediaQuery){
  if (lgMediaQuery.matches){
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
    });
  }
  else{
    populateMobile()
  }
}
function showMap(lgMediaQuery){
  if(lgMediaQuery.matches){
    mapSituation.innerHTML = '<iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.9189906535294!2d5.58919853488769!3d45.97287750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b5d9179ad1795%3A0xe769d9dce3608188!2sHauteville%203s!5e0!3m2!1sen!2sfr!4v1656317221385!5m2!1sen!2sfr" style="height:400px; width: 400px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  }
  else{
    mapSituation.innerHTML=""
  }
}
function showModal(){
  myModal.show();
}

//document.onreadystatechange = setTimeout(showModal,1000)
buttonModal.addEventListener("click",showModal);
populate(lgMediaQuery);
showMap(lgMediaQuery);
lgMediaQuery.addEventListener("change",showMap);
lgMediaQuery.addEventListener("change",populate);

  


