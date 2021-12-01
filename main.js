const tempClient = {
    nome: "Fernanda Ribeiro",
    cpf: "11122243334",
    telefone: "11959493234",
    email: "nanda@email.com"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

const deleteClient = (index) => {
    const dbClient = getLocalStorage();
    dbClient.splice(index, 1) // deleta pelo index e só 1 
    setLocalStorage(dbClient) 
}

const updateClient = (index, client) => {
    const dbClient = getLocalStorage();
    dbClient[index] = client //o dbClient na posição index recebe o novo client
    setLocalStorage(dbClient)
}

const creteClient = (client) =>{
    const dbClient = getLocalStorage();
    dbClient.push(client)
    setLocalStorage(dbClient)
}

document.getElementById('confirmar').addEventListener('click', saveClient())