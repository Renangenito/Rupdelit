const getLocalStorage = () => JSON.parse(localStorage.getItem('db_usuario')) ?? []
const setLocalStorage = (dbUsuario) => localStorage.setItem("db_usuario", JSON.stringify(dbUsuario))


function adicionarUsuario(usuario){
    const dbUsuario = getLocalStorage()
    dbUsuario.push(usuario)
    setLocalStorage(dbUsuario)
}

function removeUsuario(usuarioId){
    const local = getLocalStorage()
    local.forEach(element => {
        if(element.id == usuarioId){
            console.log(element)
        }
    });
}

function criarUsuario() {
    const local = getLocalStorage();
    const user = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        id: local.length + 1
    }
    return user;
}
function criaRow(){
    const row = document.createElement("tr")
    const tbody = document.getElementById('tabela-corpo')
    const local = getLocalStorage()
    local.forEach(e=>{
        row.innerHTML = ` <td>${e.nome}</td>
        <td>${e.cpf}</td>
        <td>${e.telefone}</td>
        <td>${e.email}</td>
        <td>
            <button class="botao-editar" id="editar">Editar</button>
            <button class="botao-deletar" id="deletar">Deletar</button>
        </td>`
    
    })
    tbody.appendChild(row)

}    
   

function limpaCampos() {
        document.getElementById('nome').value = "";
        document.getElementById('cpf').value = "";
        document.getElementById('telefone').value = "";
        document.getElementById('email').value = "";
}


document.getElementById('confirmar').addEventListener('click', () => {
    adicionarUsuario(criarUsuario())
    criaRow()
    limpaCampos()
})
