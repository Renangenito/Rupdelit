const getLocalStorage = () => JSON.parse(localStorage.getItem('db_usuario')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_usuario", JSON.stringify(dbClient))


const createUsuario = (usuario) => {
    const dbUsuario = getLocalStorage()
    dbUsuario.push (usuario)
    setLocalStorage(dbUsuario)
}


const usuario = {
    nome: "Fernanda Ribeiro",
    cpf: "33344455578",
    telefone: "11987647354",
    email: "nanda@email.com"
}
