const botone= document.getElementById("botone");
const tarea= document.getElementById("tarea");
const input1 = document.getElementById("input1");
const lista = document.getElementById("lista");
const dondeAgrega = document.getElementById("dondeAgrega");
const contadorr = document.getElementById("contadorr");
const nuevaTarea = document.getElementById("nuevaTarea");
//--------------------primera parte
const lista2 = document.getElementById("lista2");
const borrar =document.getElementsByClassName("borrar");
const completadas= document.getElementsByClassName("completada");
let nuevoBoton = document.getElementById("NuevoBoton");
var listaTarea =document.getElementsByClassName("listaTarea");



var tareasAcabadas =0;
var contador= 0;
var registro = 0;

    botone.addEventListener("click", (evento)=>{
        if(lista.value != "otro" && input1.value != ''){
            contador++;
            dondeAgrega.innerHTML += "<div class='listaTarea'>" + lista.value + ": "+input1.value+ "<button class='borrar' >Borrar</button> <button class='completada'>Marcar como completada</button><br/></div>";
            contadorr.innerHTML = tareasAcabadas + " tareas acabadas de: " + contador;
        }
        else if (lista.value == "otro" ){
            tarea.innerHTML = '<br/>Escribe la nueva materia: <input type="text" id="input2"> <button id="botonExtra">recarga</button>';
                // tarea.innerHTML = '<button id="botonExtra">recarga</button>';
                const input2 = document.getElementById("input2");
                let botonExtra = document.getElementById("botonExtra");
                botonExtra.addEventListener("click", (evento)=>{                    
                    lista.innerHTML += "<option>"+input2.value+"</option>";
                });
        }
    });
    dondeAgrega.addEventListener("click", (evento)=>{
        if(evento.target.className === 'borrar'){
            //evento.target.parentElement.innerHTML = '';
            evento.target.parentElement.outerHTML = '';

            contador--;
            contadorr.innerHTML = tareasAcabadas + " tareas acabadas de: " + contador;
        }
        if(evento.target.className === 'completada'){

            evento.target.style.display = "none";
            tareasAcabadas++;
            console.log(tareasAcabadas);
            contadorr.innerHTML = tareasAcabadas + " tareas acabadas de: " + contador;
        }
    });



