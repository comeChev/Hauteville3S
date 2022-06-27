let myModal = new bootstrap.Modal(document.querySelector("#modalContact"), {});
let buttonModal = document.querySelector("#btnContact")
let lgMediaQuery = window.matchMedia("(min-width: 992px)")
let mapSituation = document.querySelector("#mapSituation")

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
buttonModal.addEventListener("click",showModal)
showMap(lgMediaQuery)  
lgMediaQuery.addEventListener("change",showMap)

  


