class campeones{
    constructor(nombre, vida, mana, ataque, tipo, fuerte1, fuerte2, ...habilidades){
        this.tipo = tipo;
        this.fuerte1 = fuerte1;
        this.fuerte2 = fuerte2;
        this.habilidades = habilidades;
        this.nombre = nombre;
        this.vida = vida; 
        this.mana = mana;
        this.ataque = ataque; 
    };
}

class tiradorr extends campeones{
    constructor (nombre,vida,mana,ataque, tipo, fuerte1, fuerte2,distancia, ...habilidades){
        super(nombre,vida,mana,ataque, tipo, fuerte1, fuerte2, ...habilidades);
        this.distancia = distancia;
    };
    presentate(){
        console.log('Mi nombre es Tirador y soy un campeón de tipo tirador en League Of Legends');
        console.log('Cuando se trata de presición no existe nadie que se me compare (siempre doy en el blanco ._-)');
        console.log('Mis estadisticas son las siguientes: ');
        console.log('vida: '+this.vida +' ataque: '+this.ataque+' mana: '+this.mana+' distancia: ' + this.distancia);
    };
    comparar(nombree){
        if(nombree == tirador){
            console.log('Son los mismos campeones por lo que no hay ventaja de tipo');
        } else if (nombree == tanque){
            console.log('Tienes ventaja de tipo, apostaría $100 a que ganas');
        } else if (nombree == luchador){
            console.log('Tienes ventaja de tipo, apostaría $100 a que ganas');
        } else if (nombree == mago){
            console.log('oh oh, tienes desventaja de tipo, suerte aunque es más probable que pierdas');
        } else if (nombree == asesino){
            console.log('oh oh, tienes desventaja de tipo, suerte aunque es más probable que pierdas');
        } else {
            console.log('Lo sentimos no hay nada para eso');
            console.log(nombree);
        }
        
    };
}
class tanquee extends campeones{
    constructor (nombre,vida,mana,ataque, tipo, fuerte1, fuerte2,armadura, ...habilidades){
        super(nombre,vida,mana,ataque, tipo, fuerte1, fuerte2, ...habilidades);
        this.armadura = armadura;
    };
    presentate(){
        console.log('Mi nombre es Tanque y soy un campeón de tipo tanque en League Of Legends');
        console.log('Cuando se trata de defender, yo soy el indicado, nadie podrá transpasar mis defensas');
        console.log('Mis estadisticas son las siguientes: ');
        console.log('vida: '+this.vida +' ataque: '+this.ataque+' mana: '+this.mana+' armadura: ' + this.armadura);
    };
    comparar(nombree){
        if(nombree == tirador){
            console.log('oh oh, tienes desventaja de tipo, suerte aunque es más probable que pierdas');
        } else if (nombree == tanque){
            console.log('Son los mismos campeones por lo que no hay ventaja de tipo');
        } else if (nombree == luchador){
            console.log('oh oh, tienes desventaja de tipo, suerte aunque es más probable que pierdas');
        } else if (nombree == mago){
            console.log('Tienes ventaja de tipo, apostaría $100 a que ganas');
        } else if (nombree == asesino){
            console.log('Tienes ventaja de tipo, apostaría $100 a que ganas');
        } else {
            console.log('Lo sentimos no hay nada para eso');
            console.log(nombree);
        }
    };
}
class magoo extends campeones{
    constructor (nombre,vida,mana,ataque, tipo, fuerte1, fuerte2,distancia, ...habilidades){
        super(nombre,vida,mana,ataque, tipo, fuerte1, fuerte2, ...habilidades);
        this.distancia = distancia;
    };
    presentate(){
        console.log('Mi nombre es Mago y soy un campeón de tipo mago en League Of Legends');
        console.log('Con mi magia y mi poder destruiré a todos mis enemigos');
        console.log('Mis estadisticas son las siguientes: ');
        console.log('vida: '+this.vida +' ataque: '+this.ataque+' mana: '+this.mana+' distancia: ' + this.distancia);
    };
    comparar(nombree){
        if(nombree == tirador){
            console.log('Tienes ventaja de tipo, apostaría $100 a que ganas');
        } else if (nombree == tanque){
            console.log('oh oh, tienes desventaja de tipo, suerte aunque es más probable que pierdas');
        } else if (nombree == luchador){
            console.log('Tienes ventaja de tipo, apostaría $100 a que ganas');
        } else if (nombree == mago){
            console.log('Son los mismos campeones por lo que no hay ventaja de tipo');
        } else if (nombree == asesino){
            console.log('oh oh, tienes desventaja de tipo, suerte aunque es más probable que pierdas');
        } else {
            console.log('Lo sentimos no hay nada para eso');
            console.log(nombree);
        }
        
    };
}
class luchadorr extends campeones{
    constructor (nombre,vida,mana,ataque, tipo, fuerte1, fuerte2,movilidad, ...habilidades){
        super(nombre,vida,mana,ataque, tipo, fuerte1, fuerte2, ...habilidades);
        this.movilidad = movilidad;
    };
    presentate(){
        console.log('Mi nombre es Luchador y soy un campeón de tipo luchador en League Of Legends');
        console.log('Si busca a alguien equilibrado en todo sentido, entonces soy tu mejor elección');
        console.log('Mis estadisticas son las siguientes: ');
        console.log('vida: '+this.vida +' ataque: '+this.ataque+' mana: '+this.mana+' movilidad: ' + this.movilidad);
    };
    comparar(nombree){
        if(nombree == tirador){
            console.log('oh oh, tienes desventaja de tipo, suerte aunque es más probable que pierdas');
        } else if (nombree == tanque){
            console.log('Tienes ventaja de tipo, apostaría $100 a que ganas');
        } else if (nombree == luchador){
            console.log('Son los mismos campeones por lo que no hay ventaja de tipo');
        } else if (nombree == mago){
            console.log('oh oh, tienes desventaja de tipo, suerte aunque es más probable que pierdas');
        } else if (nombree == asesino){
            console.log('Tienes ventaja de tipo, apostaría $100 a que ganas');
        } else {
            console.log('Lo sentimos no hay nada para eso');
            console.log(nombree);
        }
    };
}
class asesinoo extends campeones{
    constructor (nombre,vida,mana,ataque, tipo, fuerte1, fuerte2, ...habilidades){
        super(nombre,vida,mana,ataque, tipo, fuerte1, fuerte2, ...habilidades);
    };
    presentate(){
        console.log('Mi nombre es Asesino y soy un campeón de tipo asesino en League Of Legends');
        console.log('Si busca a algien equilibrado en todo sentido, entonces soy tu meojor elección');
        console.log('Mis estadisticas son las siguientes: ');
        console.log('vida: '+this.vida +' ataque: '+this.ataque+' mana: '+this.mana);
    };
    comparar(nombree){
        if(nombree == tirador){
            console.log('Tienes ventaja de tipo, apostaría $100 a que ganas');
        } else if (nombree == tanque){
            console.log('oh oh, tienes desventaja de tipo, suerte aunque es más probable que pierdas');
        } else if (nombree == luchador){
            console.log('Tienes ventaja de tipo, apostaría $100 a que ganas');
        } else if (nombree == mago){
            console.log('Son los mismos campeones por lo que no hay ventaja de tipo');
        } else if (nombree == asesino){
            console.log('Tienes ventaja de tipo, apostaría $100 a que ganas');
        } else {
            console.log('Lo sentimos no hay nada para eso');
            console.log(nombree);
        }
    };
}
const tirador = new tiradorr('tirador',90, 100, 173.6, 'tirador', 'tanque', 'luchador', 50, 'Buena puntería', 'Es ágil','Multiplica por 24% el ataque', 'tiene una propiedad llamada distancia');
const tanque = new tanquee('tanque', 210.8, 100, 85, 'tanque', 'asesino', 'mago', 99, 'Es muy resistente', 'Multiplica por 24% la vida', 'tiene una propiedad llamada armadura');
const luchador = new luchadorr('luchador', 172.5, 100, 132.25, 'luchador', 'asesino', 'tanque', 100, 'Es muy fuerte', 'Multiplica por 15% la vida y el ataque', 'tiene una propiedad llamada movilidad');
const mago = new magoo('mago', 90, 80, 192, 'mago', 'tirador', 'luchador', 30, 'Causa un gran daño', 'Multiplica por 24% el maná', 'tiene una propiedad llamada distancia');
const asesino = new asesinoo('asesino', 95, 88, 182, 'asesino', 'tirador', 'luchador', 'Es silencioso', 'realiza ataques críticos', 'es muy inteligente');


console.log(tirador);
console.log(tanque);
console.log(asesino);
console.log(mago);
console.log(luchador);
