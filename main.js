let nome = document.getElementById('nome');
let cpf = document.getElementById('cpf');
let idade = document.getElementById('idade');
let M = document.getElementById('generoM');
let F = document.getElementById('generoF');
let td = document.getElementsByTagName('td');
function checar() {
    let genero;
    if (M.checked){
        genero = 'M';
        // console.log(genero)
    }
    if (F.checked){
        genero = 'F';
        // console.log(genero)
    }
    return genero
}


class Usuario{
    constructor(nome,cpf,idade,genero){
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.genero = genero;
    }

    addUsuario(Nome,Cpf,Idade,Genero){
        this.nome = Nome;
        this.cpf = Cpf;
        this.idade = Idade;
        this.genero = Genero;
        console.log(this.nome,this.cpf,this.genero,this.idade);
    }

}

class Usuarios {
    constructor(){
        this.Usuario = [];
    }
    addUsuarios(item){
        this.Usuario.push(item);
        console.log(this.Usuario);
    }
}
console.log();

const ItemUsuario = new Usuario();
const ListaUsuarios = new Usuarios();
let botao = document.getElementById('addTodo');
botao.onclick = function(){
    checar();
    ItemUsuario.addUsuario(nome.value,cpf.value, idade.value, checar());
    // console.log(nome.value,cpf.value, idade.value, checar());
    ListaUsuarios.addUsuarios(ItemUsuario);

};

