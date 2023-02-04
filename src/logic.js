
function updateAll() {

    let d = new Date();

    let hora = d.getHours();
    let minutos = d.getMinutes();
    let segundos = d.getSeconds();

    updateDigit(hora, "hora2", "hora1");
    updateDigit(minutos, "min2", "min1");
    updateDigit(segundos, "seg2", "seg1");

    setTimeout(updateAll, 700);

}

function updateDigit(num, id1, id2) {
    let firstDigit = Math.floor(num/10);
    let lastDigit = num % 10;

    document.getElementById(id1).src = "/img/"+firstDigit + ".jpg"
    document.getElementById(id2).src = "/img/"+lastDigit + ".jpg"
}

setTimeout( updateAll, 700);

