document.getElementById('cadastrar').addEventListener('click', ()=> {
    document.getElementById('modal').classList.add("ativar-modal")
})
document.getElementById('editar').addEventListener('click', ()=>{
    document.getElementById('modal').classList.add("ativar-modal")
})

document.getElementById('cancelar').addEventListener('click', ()=>{
    document.getElementById('modal').classList.remove("ativar-modal")
})

document.getElementById('icone-close').addEventListener('click', ()=>{
    document.getElementById('modal').classList.remove("ativar-modal")
})

