const botone= document.getElementById("botone");
const tarea= document.getElementById("tarea");
const input1 = document.getElementById("input1");
const input2 = document.getElementsByClassName("input2");
const lista = document.getElementById("lista");
const dondeAgrega = document.getElementById("dondeAgrega");
const contadorr = document.getElementById("contadorr");
const nuevaTarea = document.getElementById("nuevaTarea");
//--------------------primera parte
const lista2 = document.getElementById("lista2");
const borrar =document.getElementsByClassName("borrar");
const completadas= document.getElementById("completada");

var tareasAcabadas =0;
var contador= 0;

    botone.addEventListener("click", (evento)=>{
        if(lista.value != "otro" && input1.value != ''){
            contador++;
            dondeAgrega.innerHTML += "<div class='listaTarea'>" + lista.value + ": "+input1.value+ "<button class='borrar'>Borrar</button> <button id='completada'>Marcar como completada</button><br/></div>";
            contadorr.innerHTML = tareasAcabadas + " tareas acabadas de: " + contador;
        }
        else if (lista.value == "otro" ){
            console.log(input2.value);
            tarea.innerHTML = '<br/>Escribe la nueva materia: <input type="text" class="input2">';
            nuevaTarea.innerHTML += "<option>"+input2.value+"</option>";
        }

    });
    dondeAgrega.addEventListener("click", (evento)=>{
        if(evento.target.className === 'borrar'){
            evento.target.parentElement.otuerHTML = '';
            contador--;
            contadorr.innerHTML = tareasAcabadas + " tareas acabadas de: " + contador;
        }
        if(evento.target.idName === 'completada'){
            dondeAgrega.innerHTML ="id='otroColor'"
            tareasAcabadas++;
        }
    });

