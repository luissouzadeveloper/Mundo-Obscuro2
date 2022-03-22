//Pegando a hora
function cumprimento(){
    var horario = new Date();
    horario.getHours;
    horario.getMinutes;
    
    if (horario < 12) {
        alert(`Agora são ${horario} horas e ${horario} minutos! Bom dia`);
    } else
        if (horario < 18) {
            alert(`Agora são ${horario} horas e ${horario} minutos! Boa tarde`); 
        } else {
            alert(`Agora são ${horario} horas e ${horario} minutos! Boa noite`);
        }
}

//cumprimento();

// MODO ESCURO

function modoEscuro(){
    var botao1 = document.querySelector('.btn');
    botao1.style.backgroundColor = '#303030';
    botao1.style.color = '#ffffff';

}

function modoClaro(){
    var botao2 = document.querySelector('.btn');
    botao2.style.backgroundColor = '#ffffff';
    botao2.style.color = 'black';
}