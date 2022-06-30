// ---------------------------------------------------------
// DECLARATION DES VARIABLES
// ---------------------------------------------------------
let myModalForm = new bootstrap.Modal(document.querySelector("#modalContact"));
let form = document.querySelectorAll(".contactForm")
let submitButton = document.querySelector('#submitButtonContact')
let modalForm = document.querySelector("#modalForm")

// ---------------------------------------------------------
// DECLARATION DES FONCTIONS
// ---------------------------------------------------------
function timeOutForm(time){
  setTimeout(()=>{
    myModalForm.hide()
  },time)
}
function showFormContact(){
  myModalForm.show()
}
function closeFormContact(){
  myModalForm.hide()
}
function validateForm(array){
  let count=0
  array.forEach(element => {
    if(element.value =="" || element.value == null){
      return count++
    }
  })
  let txtInfo = document.querySelectorAll(".txtInfo")
  if(!txtInfo.length == 0){
    txtInfo.forEach(element => {
      element.remove()
    });
  }
  let messageDiv = document.createElement('div')
  if (!count==0){
    let message = modalForm.appendChild(messageDiv)
    message.innerText = `Votre message ne peut être validé. Merci de remplir toutes les cases.`
    message.classList.add("row", "justify-content-center","text-center", "text-danger", "txtInfo")
  } else{
    let messageDiv2 = document.createElement("div")
    let message = modalForm.appendChild(messageDiv)
    message.innerText = `Votre message a bien été envoyé. Nous vous répondrons sous peu.`
    message.classList.add("row", "justify-content-center","text-center", "text-success","txtInfo")
    let messageClose = modalForm.appendChild(messageDiv2)
    messageClose.innerText = `Cette fenêtre va ser fermer automatiquement.`
    messageClose.classList.add("row", "justify-content-center","text-center", "text-success","txtInfo")
    timeOutForm(3000)
  }
}

// ---------------------------------------------------------
// LANCEMENT DES FONCTIONS
// ---------------------------------------------------------

submitButton.addEventListener("click",()=>{
  validateForm(form)
})