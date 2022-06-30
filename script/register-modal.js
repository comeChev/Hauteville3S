// ---------------------------------------------------------
// DECLARATION DES VARIABLES
// ---------------------------------------------------------
let modalRegister = new bootstrap.Modal(document.querySelector('#modalRegister'))
let formRegister = document.querySelectorAll(".register-form")
let submitButtonRegister = document.querySelector('#btnRegister')
let modalFormRegister = document.querySelector("#modalFormRegister")
let inputEvent = document.getElementById('inputEvent')
let inputDate = document.querySelector('#inputDate')


// ---------------------------------------------------------
// DECLARATION DES FONCTIONS
// ---------------------------------------------------------
function timeOutFormRegister(time){
  setTimeout(()=>{
    modalRegister.hide()
  },time)
}
function closeFormRegister(){
  modalRegister.hide()
}
function formatDateShort(date){
  let event = new Date(date);
  return `${event.toLocaleDateString(undefined, {year:'numeric'})}-${event.toLocaleDateString(undefined, {month:'2-digit'})}-${event.toLocaleDateString(undefined, {day:'numeric'})}`
}
function showModalRegister(event){
  modalRegister.show()
  let divRegister = event.target.parentElement
  let eventValue = divRegister.children[0].innerText
  console.log(eventValue)
  console.log(inputEvent)
  let dateEventValue = formatDateShort(new Date(divRegister.children[1].innerText))
  console.log(dateEventValue)
  inputEvent.value = eventValue
  inputEvent.setAttribute('disabled','')
  inputDate.setAttribute('value',`${dateEventValue}`)
  inputDate.setAttribute('disabled','')
  console.log(inputDate)

}
function validateFormRegister(array){
  let count=0
  array.forEach(element => {
    if(element.value =="" || element.value == null){
      return count++
    }
  })
  let txtInfoRegister = document.querySelectorAll(".txtInfoRegister")
  if(!txtInfoRegister.length == 0){
    txtInfoRegister.forEach(element => {
      element.remove()
    });
  }
  let messageDivRegister = document.createElement('div')
  if (!count==0){
    let messageRegister = modalFormRegister.appendChild(messageDivRegister)
    messageRegister.innerText = `Votre inscription ne peut être validée. Merci de remplir toutes les cases.`
    messageRegister.classList.add("row", "text-center","justify-content-center", "text-danger", "txtInfoRegister")
  } else{
    let messageDivRegister2 = document.createElement("div")
    let messageRegister = modalFormRegister.appendChild(messageDivRegister)
    messageRegister.innerText = `Votre inscription a bien été prise en compte. Nous vous répondrons sous peu.`
    messageRegister.classList.add("row", "text-center","justify-content-center", "text-success","txtInfoRegister")
    let messageCloseRegister = modalFormRegister.appendChild(messageDivRegister2)
    messageCloseRegister.innerText = `Cette fenêtre va se fermer automatiquement.`
    messageCloseRegister.classList.add("row", "text-center","justify-content-center", "text-success","txtInfoRegister")
    timeOutFormRegister(3000)
  }
}

// ---------------------------------------------------------
// LANCEMENT DES FONCTIONS
// ---------------------------------------------------------

submitButtonRegister.addEventListener("click",()=>{
  validateFormRegister(formRegister)
})