let result;
const matriu = [
    function one() {
        let dades = "";
        let dades2 = "";
        for (let i = 0; i <= 9; i++) {
            dades += i + ", ";
        }
        dades2 = dades.slice(0, dades.length - 2);
        return dades2;
    },
    function two() {
        let dades = "";
        let dades2 = "";
        for (let i = 0; i <= 9; i++) {
            dades += `${i} ,`;
        }
        dades2 = dades.substring(0, dades.length - 2);
        return dades2;
    },
    function three() {
        let dades = "";
        let dades2 = "";
        for (let i = 0; i <= 9; i++) {
            dades += `${i} ,`;
        }
        dades2 = dades.substring(0, dades.length - 2);
        return dades2;
    },
    function four() {
        let dades = "";
        let dades2 = "";
        for (let i = 0; i <= 9; i++) {
            dades += `${i} ,`;
        }
        dades2 = dades.substring(0, dades.length - 2);
        return dades2;
    },
    function five() {
        let dades = "";
        let dades2 = "";
        for (let i = 0; i <= 9; i++) {
            dades += `${i} ,`;
        }
        dades2 = dades.substring(0, dades.length - 2);
        return dades2;
    },
    function six() {
        let dades = "";
        let dades2 = "";
        for (let i = 0; i <= 9; i++) {
            dades += `${i} ,`;
        }
        dades2 = dades.substring(0, dades.length - 2);
        return dades2;
    },
    function seven() {
        let dades = "";
        let dades2 = "";
        for (let i = 0; i <= 9; i++) {
            dades += `${i} ,`;
        }
        dades2 = dades.substring(0, dades.length - 2);
        return dades2;
    },
    function eight() {
        let dades = "";
        let dades2 = "";
        for (let i = 0; i <= 9; i++) {
            dades += `${i} ,`;
        }
        dades2 = dades.substring(0, dades.length - 2);
        return dades2;
    },
    function nine() {
        let dades = "";
        let dades2 = "";
        for (let i = 0; i <= 9; i++) {
            dades += `${i} ,`;
        }
        dades2 = dades.substring(0, dades.length - 2);
        return dades2;
    },
    function ten() {
        let dades = "";
        let dades2 = "";
        for (let i = 0; i <= 9; i++) {
            dades += `${i} ,`;
        }
        dades2 = dades.substring(0, dades.length - 2);
        return dades2;
    },
]
for (i = 0; i < matriu.length; i++) {
    console.log(matriu[i]());
}