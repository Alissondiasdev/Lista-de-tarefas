const headerinput = document.getElementById('header-input')
var containerTarefas = document.getElementById('container__tarefas')
const inputhidden = document.getElementById('inputhidden')
const headerButton = document.getElementById('header-button')
const headerbuttonatualizar = document.getElementById('header-button-atualizar')
const novaTarefaArray = []





window.addEventListener("load", function() {
    
    headerinput.focus();
});



headerinput.addEventListener('keypress', function(evento){
    if(evento.key == 'Enter' && headerinput.value > ''){
        
        novaTarefaObj = {
            nome: headerinput.value,
            id: (Math.floor(Math.random() * 10000))
        }
        novaTarefaArray.push(novaTarefaObj)
        adicionarTarefa()
        headerinput.value= ("") 
        
        
        containerTarefas.scrollTop = containerTarefas.scrollHeight;
            
        }
    
    })

    function criarTarefa () {
        
        if(headerinput.value > ''){
            
            novaTarefaObj = {
                nome: headerinput.value,
                id: (Math.floor(Math.random() * 10000))
            }
            novaTarefaArray.push(novaTarefaObj)
            adicionarTarefa()
            headerinput.value= ("") 
           
            
        }
        containerTarefas.scrollTop = containerTarefas.scrollHeight;
    }




const adicionarTarefa = () => {
    const novaTarefa = novaTarefaArray.map((item) => {
        return `
        
        <ul id="lista_tarefas" class="lista_tarefas">
        
            <li>${item.nome}</li> 

            <div class="container_icones">
            <i class="ri-file-edit-line icone_editar" onclick="editarTarefa(${item.id})"></i>
            <i class="ri-delete-bin-line icone_excluir" onclick="excluirTarefa(${item.id})"></i>
            </div>
            
            
            
            </ul>
        `

    })
    containerTarefas.innerHTML = novaTarefa.join('')
    containerTarefas.style.display="block"
    
    
    
}

const editarTarefa = (id) => {
    if (id) {
        headerButton.style.display="none"
        const index = novaTarefaArray.findIndex((item) => {
            return item.id == id
        })
        headerbuttonatualizar.style.display="flex"
        const task = novaTarefaArray[index]
        headerinput.value = task.nome
        inputhidden.value = task.id



    }

}

const atualizarTarefa = () => {
    headerButton.style.display="flex"
    headerbuttonatualizar.style.display="block"
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

const excluirTarefa = (id) => {
    const indice = novaTarefaArray.findIndex((item) => {
    return item.id == id;
    });
    if (indice === 0) {
    // Executa a ação desejada
    containerTarefas.style.display="none"
    }
    if (indice >= 0) {
    novaTarefaArray.splice(indice, 1);
    adicionarTarefa();
    console.log(novaTarefaArray);
    } else {
    console.log("O array está vazio.");
    }
    };

    
    

