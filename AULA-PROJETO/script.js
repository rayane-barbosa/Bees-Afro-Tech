/*Validação do campo e-mail e campo telefone recebidos via input no html*/
function validarForm() {
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  
  var emailRegExp = /^\S+@\S+\.\S+$/;
  var telefoneRegExp = /\d{3}[\s.-]?\d{4}[\s.-]?\d{4}/;
  
  if (!emailRegExp.test(email)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return false;
  }
  
  if (!telefoneRegExp.test(telefone)) {
    alert("Por favor, insira um número de telefone válido.");
    return false;
  }
  
  return true;
}