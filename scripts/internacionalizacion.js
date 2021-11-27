let titulo=document.getElementById('titulo1');
let ejemplo=document.getElementById('info');
let cinta=document.getElementById('cargar');
let velocidad=document.getElementById('velocidad');
let correr=document.querySelector('.correr');
let detener=document.querySelector('.detener');
let integrantes=document.getElementById('int');
let Ejemplo=document.querySelector('.ejemplo');
let Ejemplo1=document.querySelector('.ejemplo1');
let textto=document.querySelector('.texto');

function Ingles(){
    titulo.innerHTML="TURING MACHINE";
    ejemplo.innerHTML="Example";
    cinta.innerHTML="Sart tape"
    velocidad.innerHTML="Speed:"
    correr.innerHTML="Run";
    detener.innerHTML="Stop";
    cerrar.innerHTML="Close";
    integrantes.innerHTML="Team mates"
    Ejemplo.innerHTML="Examples"
    Ejemplo1.innerHTML="Examples:"
    textto.innerHTML= `Enter: aaaaaaaaaaaaaabbbbbbbbbbbbabababbbbbbbbbbb <br/> Come back: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`
}
function Español(){
    titulo.innerHTML="MAQUINA DE TURING"
    ejemplo.innerHTML="Ejemplos";
    cinta.innerHTML="Iniciar cinta "
    velocidad.innerHTML="Velocidad:"
    correr.innerHTML="Correr";
    detener.innerHTML="Detener";
    cerrar.innerHTML="Cerrar";
    integrantes.innerHTML="Intregantes"
    Ejemplo.innerHTML="Ejemplos"
    Ejemplo1.innerHTML="Ejemplos:"
    textto.innerHTML= `Ingresa: aaaaaaaaaaaaaabbbbbbbbbbbbabababbbbbbbbbbb <br/> Regresa: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`
    
}
function Frances(){
    titulo.innerHTML="MACHINE À TURING"
    ejemplo.innerHTML="Exemple";
    cinta.innerHTML="Démarrer la bande"
    velocidad.innerHTML="Vitesse:"
    correr.innerHTML="Exécuter";
    detener.innerHTML="Arrêter";
    cerrar.innerHTML="Fermer";
    integrantes.innerHTML="Membres"
    Ejemplo.innerHTML="Exemples"
    Ejemplo1.innerHTML="Exemples"
    textto.innerHTML= `Entrez : aaaaaaaaaaaaaabbbbbbbbbbbababababbbbbbbbbbb <br/> Retour : aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`
}


