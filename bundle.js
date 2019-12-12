"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var nome = document.getElementById('nome');
var cpf = document.getElementById('cpf');
var idade = document.getElementById('idade');
var M = document.getElementById('generoM');
var F = document.getElementById('generoF');
var td = document.getElementsByTagName('td');

function checar() {
  var genero;

  if (M.checked) {
    genero = 'M'; // console.log(genero)
  }

  if (F.checked) {
    genero = 'F'; // console.log(genero)
  }

  return genero;
}

var Usuario =
/*#__PURE__*/
function () {
  function Usuario(nome, cpf, idade, genero) {
    _classCallCheck(this, Usuario);

    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
    this.genero = genero;
  }

  _createClass(Usuario, [{
    key: "addUsuario",
    value: function addUsuario(Nome, Cpf, Idade, Genero) {
      this.nome = Nome;
      this.cpf = Cpf;
      this.idade = Idade;
      this.genero = Genero;
      console.log(this.nome, this.cpf, this.genero, this.idade);
    }
  }]);

  return Usuario;
}();

var Usuarios =
/*#__PURE__*/
function () {
  function Usuarios() {
    _classCallCheck(this, Usuarios);

    this.Usuario = [];
  }

  _createClass(Usuarios, [{
    key: "addUsuarios",
    value: function addUsuarios(item) {
      this.Usuario.push(item);
      console.log(this.Usuario);
    }
  }]);

  return Usuarios;
}();

console.log();
var ItemUsuario = new Usuario();
var ListaUsuarios = new Usuarios();
var botao = document.getElementById('addTodo');

botao.onclick = function () {
  checar();
  ItemUsuario.addUsuario(nome.value, cpf.value, idade.value, checar()); // console.log(nome.value,cpf.value, idade.value, checar());

  ListaUsuarios.addUsuarios(ItemUsuario);
};
