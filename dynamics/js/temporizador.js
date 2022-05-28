const temporizador = document.getElementById("tempo");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const iniciar = document.getElementById("iniciar");
const detener = document.getElementById("detener");
const sound = new Audio("./statics/sound/alarm-clock.mp3");
sound.volume = 0.09;
var min = minutos.value, seg = segundos.value; 
var ini = 0; 
var segundosInter;
if(minutos.value == ""){
    min = 0;
}
if(segundos.value == ""){
    seg= 0;
}
addEventListener("change", (eventos)=>{
    if(minutos.value != "" || min < 0){
        min = minutos.value;
    }else{
        min = 0;
    }
    if(segundos.value){
        seg = segundos.value;
    }else{
        seg = 0;
    }
    if(seg<10){
        temporizador.innerText = min+":"+"0"+seg;
    }else{
        temporizador.innerText = min+":"+seg
    }
});
iniciar.addEventListener("click", (eventoIni)=>{
    if(ini!= 1){
        segundosInter = setInterval(()=>{
            if(seg > 0){
                seg--;
            }else if(seg == 0 && min > 0){
                min--;
                seg = 59;
            }else if(min == 0 && seg == 0){
                seg = segundos.value;
                min = minutos.value;
                sound.play();
                clearInterval(segundosInter);
                ini= 0;
            }
            if(seg<10){
                temporizador.innerText = min+":"+"0"+seg;
            }else{
                temporizador.innerText = min+":"+seg
            }
        }, 1000);
    }
    ini = 1;
    
});

detener.addEventListener("click", (eventoDet)=>{
    clearInterval(segundosInter);
    sound.load();
    sound.pause();
    ini= 0;
});

