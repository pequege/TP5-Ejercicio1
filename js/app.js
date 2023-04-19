let formularioNumeroMagico = document.querySelector('form');
formularioNumeroMagico.addEventListener('submit', obtenerUserGuess);
//generar número random
let numeroMagico = Math.round(Math.random() * 10) + 1;
console.log(numeroMagico);

function obtenerUserGuess(e){
    e.preventDefault();
    let userGuess = parseInt(document.getElementById("userGuess").value);
    console.log(userGuess);
    formularioNumeroMagico.reset();
    if(userGuess === numeroMagico) {
        window.alert(`Ganaste!`)
    }else if( userGuess > numeroMagico){
        window.alert(`Menor`);
    }else{
        window.alert(`Mayor`);
    }
}
