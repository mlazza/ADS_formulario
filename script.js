

  // VALIDACAO DO EMAIL
  function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
      
          document.getElementById("msgemail").innerHTML="";
   
    }
    else{
      document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
    
    }
      validar();
    }


    // VALIDACAO DOS CAMPOS PREENCHIDOS

    function validar() {
  // pegando o valor do nome pelos names
  var nome = document.getElementById("nome");
  var sobrenome = document.getElementById("sobrenome");
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");
  var telefone = document.getElementById("telefone");
  var cep = document.getElementById("cep");
  var sexo = document.getElementById("sexo");
  

  // verificar se o nome está vazio
  if (nome.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
    nome.focus();
    // retorna a função e não olha as outras linhas
    return;
  }
  if (sobrenome.value == "") {
    alert("Sobrenome não informado");
    sobrenome.focus();
    return;
  }
  if (email.value == "") {
    alert("E-mail não informado");
    email.focus();
    return;
  }
  if (senha.value == "") {
    alert("Senha não informada");
    senha.focus();
    return;
  }
  if (telefone.value == "") {
    alert("Telefone não informado");
    telefone.focus();
    return;
  }
  if (cep.value == "") {
    alert("CEP não informado");
    cep.focus();
    return;
  }
  if (sexo.value == "") {
    alert("CEP não informado");
    sexo.focus();
    return;
  }
  alert("Formulário enviado!");
  // envia o formulário
  //formulario.submit();
}