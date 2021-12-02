const getLocalStorage = () => JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

const deleteClient = (index) => {
    const dbClient = getLocalStorage();
    dbClient.splice(index, 1) // Deleta pelo index e só 1 
    setLocalStorage(dbClient) 
}

const updateClient = (index, client) => {
    const dbClient = getLocalStorage();
    dbClient[index] = client //O dbClient na posição index recebe um novo client
    setLocalStorage(dbClient)
}

const creteClient = (client) =>{
    const dbClient = getLocalStorage();
    dbClient.push(client)
    setLocalStorage(dbClient)
}
const camposValidos = () =>{
   return document.getElementById('formulario').reportValidity()
}

const limpaCampos = () =>{
    const campos = document.querySelectorAll('.campos')
    campos.forEach(campo => campo.value = "")
}

const saveClient = () =>{
    if(camposValidos()){
        const client = {
            nome: document.getElementById('nome').value,
            cpf: document.getElementById('cpf').value,
            telefone: document.getElementById('telefone').value,
            email: document.getElementById('email').value
        }
        creteClient(client)
        atualizarTabela()
        fecharModal();
    }
}
const createLinha = (client) =>{
    const novaLinha = document.createElement('tr')
    novaLinha.innerHTML = `
                    
                    <td>${client.nome}</td>
                    <td>${client.cpf}</td>
                    <td>${client.telefone}</td>
                    <td>${client.email}</td>
                    <td>
                        <button class="botao-editar" id="editar">Editar</button>
                        <button class="botao-deletar" id="deletar">Deletar</button>
                    </td>
    `

    document.getElementById('tabela-corpo').appendChild(novaLinha) //Adiciona a TR ao TBODY
}

const limparTabela = () =>{
    const rows = document.querySelectorAll("#tabela-corpo> tr") // Remove as linhas duplicadas quando cadastrar
    rows.forEach(row => row.parentNode.removeChild(row))
}


const atualizarTabela = () =>{
    const dbClient = getLocalStorage() //Cria as linhas da tabela assim que carregar a página
    limparTabela()
    dbClient.forEach(createLinha)
}

atualizarTabela() 


// ------------- MODAL -------------
const abrirModal = () => {
    document.getElementById('modal').classList.add("ativar-modal") //Abre o modal
   }

const fecharModal = () => {
    document.getElementById('modal').classList.remove("ativar-modal"); //Fecha o modal e limpa os campos
    limpaCampos();
   }  


document.getElementById('cadastrar').addEventListener('click', abrirModal) // Botão cadastrar abre o modal
// document.getElementById('editar').addEventListener('click', abrirModal)    // Botão editar abre o modal

document.getElementById('cancelar').addEventListener('click', ()=>{
    fecharModal();                                                      // Botão Cancelar fecha modal
})

document.getElementById('icone-close').addEventListener('click', ()=>{ 
    fecharModal();                                                       //Ícone de X close modal
})

document.getElementById('confirmar').addEventListener('click', saveClient) // Botão confirmar adiciona