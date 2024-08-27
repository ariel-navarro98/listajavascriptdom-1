function adicionarItem() {
    var input = document.getElementById('inputItem');
    var textoItem = input.value.trim();
    var input2 = document.getElementById('select').value;
    var inputdesc = document.getElementById('inputdesc');
    var descItem = inputdesc.value.trim();
    var imagem = document.getElementById('imagem');
    
    if (textoItem !== '' && input2 !==''){
        var lista = document.getElementById('listaTarefas');
        var novoItem = document.createElement('li');
        novoItem.textContent = textoItem;
        
        var desc = document.createElement('p');
        desc.classList.add('desc')
        desc.innerHTML = descItem + '<br>';


        var botaosobre = document.createElement('button');
        botaosobre.textContent = 'mostrar mais';
        botaosobre.classList.add('btnsobre')
        botaosobre.onclick = function() {
            if (desc.style.display === "block") {
                desc.style.display = "none";
                botaosobre.textContent = 'mostrar mais';
                
              } else {
                desc.style.display = "block";
                botaosobre.textContent = 'mostrar menos';
              }
        };
        
        var botaoRemover = document.createElement('button');
        botaoRemover.textContent = '✕';
        botaoRemover.classList.add('btnremover')
        botaoRemover.onclick = function() {
            lista.removeChild(novoItem);
        };

        var imginput = document.createElement('img');
                    imginput.classList.add('imagem')
                    imginput.src = '';

                    
        var estado = document.createElement('p');
        estado.innerHTML = 'Estado: ' + input2;
        
      

        
        novoItem.appendChild(botaoRemover);
        novoItem.appendChild(botaosobre);

        lista.appendChild(novoItem);
        
        desc.appendChild(imginput);
                    const reader = new FileReader(); 
                    reader.onload = function (e){
                        imginput.setAttribute('src',e.target.result)
                    }
                    reader.readAsDataURL(imagem.files[0]);
        novoItem.appendChild(desc);
        desc.appendChild(estado);
        
        
        input.value = '';
        inputdesc.value = '';
        select.value = '';
        imagem.value = '';

    } else {
        alert('Por favor, insira um item válido.');
    }
}

