var ingreso = document.getElementById('input'),
    alerta = document.getElementById('alert'),
    boton = document.getElementById('button'),
    lista = document.getElementById('list');

function agregarElemento (e){
    alerta.style.display= 'none';
    if (ingreso.value === '' || ingreso.value == null){
        alerta.value.style.display = 'block';
        e.preventDefault();
    } else{

        var contador =+1;
        if(( contador % 3 ) === 0){
            ingreso.value.style.color = "red";
            lista.innerHTML += '<li>(ingreso.value)</li>';
        } else{
            lista.innerHTML += '<li>(ingreso.value)</li>';
        }

    }

}

boton.addEventListener('submit', agregarElemento);