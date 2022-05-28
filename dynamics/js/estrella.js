//---------canvas
const canvas = document.getElementById("miCanvas");
const ctx= canvas.getContext("2d");
//--------constantes de html
const picudez = document.getElementById("picudez");
const color = document.getElementById("color");
const nPicos = document.getElementById("nPicos");
const relleno = document.getElementById("relleno");
//--------Valores predeterminados
var picos = nPicos.value;
var picudezVar = picudez.value;
var colorVar = color.value;
//--------Valores si no especifican un valor
if(picos == ""){
    picos= 4;
}else if(picudezVar == ""){
    picudezVar = 400;
}else if(colorVar == ""){
    colorVar = "#000000";
}
//--------contantes para canvas
const gradosTotales = 360;
const longitudExterna = 1000;
//variables
var xNueva = 250;
var yNueva = 250;
var anguloIndivExt = gradosTotales/picos;
// var anguloIndivInt = (gradosTotales/picos)/2;
// console.log(anguloIndivInt);
var i = 0;
var anguloRad = (anguloIndivExt * Math.PI / 180);
var anguloRadi = (anguloIndivExt * Math.PI /180);
var angulo = anguloRad;

var anguloi = anguloRad/2;
console.log(anguloi);
var xNuevaExt = 250, yNuevaExt =250;
var xNuevaInt = 250, yNuevaInt = 250;
var longitudLinea = longitudExterna/picos;
var longitudLineaInt = picudez.value/picos
//--prueba


    yNuevaInt = 340;
    yNuevaInt += (((500/3.1416)-(picudezVar/3.1416))/2);
    longitudLinea = longitudExterna/picos;
    anguloIndivExt = gradosTotales/picos;

    longitudLineaInt = picudez.value/picos;
    anguloRad = (anguloIndivExt * Math.PI / 180);
    anguloi = anguloRad/2;
    angulo = anguloRad/2;
        // parte lógica de la estrella
        ctx.beginPath();
        // ctx.moveTo(100 ,100);
        ctx.moveTo(xNuevaInt, yNuevaInt);

for(i= 0; i < picos; i++){
    const despXExt = longitudLinea * Math.cos(angulo);
    const despYExt = longitudLinea * Math.sin(angulo);
    const despXInt = longitudLineaInt * Math.cos(anguloi);
    const despYInt = longitudLineaInt * Math.sin(anguloi);
    xNuevaExt += despXExt;
    yNuevaExt += despYExt;
    xNuevaInt += despXInt;
    yNuevaInt += despYInt;
    angulo += anguloRad;
    anguloi += anguloRad;

    // console.log(angulo, "-angulo", xNuevaExt, "-xnuevaext", yNuevaExt, "-ynuevaext");
    ctx.lineTo(xNuevaExt, yNuevaExt);
    ctx.lineTo(xNuevaInt, yNuevaInt);
}
if(document.getElementById("relleno").checked == true){
    ctx.fillStyle = colorVar;
    ctx.fill();
}else if(document.getElementById("relleno").checked == false){
    ctx.strokeStyle = colorVar;
    ctx.stroke();
}
ctx.closePath();
// console.log de prueba

addEventListener("change", (even1)=>{
    // asignación de valores
    if(picos != ""){
        picos = nPicos.value;
    }else {
        picos = 4;
    }
    if(picudezVar != ""){
        picudezVar = picudez.value;
    }else {
        picudezVar = 405;
    }
    if(picos != ""){
        colorVar = color.value;
    }else {
        colorVar = "#000000";
    }
    yNuevaInt = 340;
    yNuevaInt += (((500/3.1416)-(picudezVar/3.1416))/2);
    longitudLinea = longitudExterna/picos;
    anguloIndivExt = gradosTotales/picos;

    longitudLineaInt = picudez.value/picos;
    anguloRad = (anguloIndivExt * Math.PI / 180);
    anguloi = anguloRad/2;
    angulo = anguloRad/2;

    // Para que se noten los cambioa de la estrella
    ctx.clearRect(0,0,700,700);

    // parte lógica de la estrella
    ctx.beginPath();
    // ctx.moveTo(100 ,100);
    ctx.moveTo(xNuevaInt, yNuevaInt);
        //---------------------------adonde se va a mover la estrella 
    for(i= 0; i < picos; i++){
        const despXExt = longitudLinea * Math.cos(angulo);
        const despYExt = longitudLinea * Math.sin(angulo);
        const despXInt = longitudLineaInt * Math.cos(anguloi);
        const despYInt = longitudLineaInt * Math.sin(anguloi);
        xNuevaExt += despXExt;
        yNuevaExt += despYExt;
        xNuevaInt += despXInt;
        yNuevaInt += despYInt;
        angulo += anguloRad;
        anguloi += anguloRad;

        // console.log(angulo, "-angulo", xNuevaExt, "-xnuevaext", yNuevaExt, "-ynuevaext");
        ctx.lineTo(xNuevaExt, yNuevaExt);
        ctx.lineTo(xNuevaInt, yNuevaInt);
    }

    // Para comprovar si quieren la estrella rellena o no
    if(document.getElementById("relleno").checked == true){
        ctx.fillStyle = colorVar;
        ctx.fill();
    }else if(document.getElementById("relleno").checked == false){
        ctx.strokeStyle = colorVar;
        ctx.stroke();
    }
    ctx.closePath();
    // console.log de prueba
});

