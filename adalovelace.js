document.getElementById("botaoEnviar").addEventListener("click", validaForm)

function validaForms() {
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" 
  && document.getElementById("phone").value != ""){
    alert("Prontinho! Você receberá as novidades por e-mail! ")
  }else{
    alert("Por favor, preencha os campos nome e email!")
  }
}
