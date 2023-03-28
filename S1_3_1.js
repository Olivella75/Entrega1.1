//Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. 
//Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

const matriu = [];

const funcBase = function() {
    let data = "";
    for (let i = 0; i < 10; i++) {
        data += i + " ";
    }
    return data;
}

for (let i = 0; i < 10; i++) {
    matriu.push(funcBase);
}

for (let i = 0; i < matriu.length; i++) {
    console.log(matriu[i]());
}