function Usuario($nome, $telefone, $email) {
  console.log(arguments);
  var nome = $nome;
  var telefone = $telefone;
  var email = $email;
  
  this.setNome = setNome;
  this.setTelefone = setTelefone;
  this.setEmail = setEmail;
  
  this.getNome = getNome;
  this.getTelefone = getTelefone;
  this.getEmail = getEmail;
  
  
  // Getters e Setters que encapsulam os atributos
  function setNome($nome){
    nome = $nome;
  }
  
  function getNome() {
    return nome;
  }
  
  function setTelefone($telefone) {
    telefone = $telefone;
  }
  
  function getTelefone() {
    return telefone;
  }
  
  function setEmail($email) {
    email = $email;
  }
  
  function getEmail() {
    return email;
  }
}

var usuario = new Usuario("Fernando", "54090809809", "email@mail.com", 1234);


// objeto utilizando arguments

function Pessoa() {
  console.log(arguments);
  
  // Recebe o primeiro argumento ou null
  var nome = arguments[0]||null,
      telefone = arguments[1]||null;
}

var pessoa = new Pessoa("Nome", "2342342");
