let myModal = new bootstrap.Modal(document.getElementById("modalContact"), {});
let buttonModal = document.querySelector("#btnContact")

document.onreadystatechange = setTimeout(showModal,1000)
buttonModal.addEventListener("click",showModal)
  
  
function showModal(){
  myModal.show();
};