const headerinput = document.getElementById('header-input')
const containerTarefas = document.getElementById('container__tarefas')
const inputhidden = document.getElementById('inputhidden')
const novaTarefaArray = []


const criarTarefa = () => {
    novaTarefaObj = {
        nome: headerinput.value,
        id: (Math.floor(Math.random() * 10000))
    }
    novaTarefaArray.push(novaTarefaObj)
    adicionarTarefa()
    headerinput.value= ("") 


}

const adicionarTarefa = () => {
    const novaTarefa = novaTarefaArray.map((item) => {
        return `
        
        <ul class="lista_tarefas">
        <input type="checkbox">
            <li>${item.nome}</li> 

            <div class="container_icones">
            <i class="ri-file-edit-line icone_editar" onclick="editarTarefa(${item.id})"></i>
            <i class="ri-delete-bin-line icone_excluir"></i>
            </div>
            
            
            
            </ul>
        `

    })
    containerTarefas.innerHTML = novaTarefa.join('')
}

const editarTarefa = (id) => {
    if (id) {
        const index = novaTarefaArray.findIndex((item) => {
            return item.id == id
        })
        const task = novaTarefaArray[index]
        headerinput.value = task.nome
        inputhidden.value = task.id



    }

}

const atualizarTarefa = () => {
    obj = {

        nome: headerinput.value,

        id: inputhidden.value,



    }
    const indice = novaTarefaArray.findIndex((item) => {
        return item.id == inputhidden.value
    })
    novaTarefaArray[indice] = obj




    

    adicionarTarefa()
    headerinput.value= ("") 

}