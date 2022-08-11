const input = document.getElementById('story');
const output = document.getElementById('resultado');
const btnCopiar = document.getElementById('button-copiar');
const activateLightTheme = document.getElementById("theme");

/* ENCRIPTAR Y MOSTRAR */

function encriptar() {
    console.log(input.value);

    let texto = (input.value).split('');
    /* encriptar */
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            texto[i] = "ai";
        } else if (texto[i] == "e") {
            texto[i] = "enter";
        } else if (texto[i] == "i") {
            texto[i] = "imes";
        } else if (texto[i] == "o") {
            texto[i] = "ober";
        } else if (texto[i] == "u") {
            texto[i] = "ufat"
        }
    }

    const textoTratado = texto.join().replaceAll(',' , '');

    /* mostrar en el resultado */

    output.innerText = textoTratado;
    btnCopiar.style.visibility = 'visible';
}

/* COPIAR */

function copiar() {
    (async () => {
        await navigator.clipboard.writeText(output.innerText);
    })();
}

/* DESENCRIPTAR */

function desencriptar() {
    console.log(input.value);

    let texto = (input.value).split('');
    /* desencriptar */
    for (let i = 0; i < texto.length; i++) {
        if ((texto[i] == "a") && (texto[i+1] == "i")) {
            texto[i] = "a";
            texto[i+1] = ",";
        } else if ((texto[i] == "e") && (texto[i+1] == "n") && (texto[i+2] == "t") && (texto[i+3] == "e") && (texto[i+4] == "r")) {
            texto[i] = "e";
            texto[i+1] = ",";
            texto[i+2] = ",";
            texto[i+3] = ",";
            texto[i+4] = ",";
        } else if ((texto[i] == "i") && (texto[i+1] == "m") && (texto[i+2] == "e") && (texto[i+3] == "s")) {
            texto[i] = "i";
            texto[i+1] = ",";
            texto[i+2] = ",";
            texto[i+3] = ",";
        } else if ((texto[i] == "o") && (texto[i+1] == "b") && (texto[i+2] == "e") && (texto[i+3] == "r")) {
            texto[i] = "o";
            texto[i+1] = ",";
            texto[i+2] = ",";
            texto[i+3] = ",";
        } else if ((texto[i] == "u") && (texto[i+1] == "f") && (texto[i+2] == "a") && (texto[i+3] == "t")) {
            texto[i] = "u";
            texto[i+1] = ",";
            texto[i+2] = ",";
            texto[i+3] = ",";
        }
    }

    const textoTratado = texto.join().replaceAll(',' , '');

    /* mostrar en el resultado */

    output.innerText = textoTratado;
    btnCopiar.style.visibility = 'visible';
}

/* MODO CLARO / OSCURO */

function modoClaroOscuro() {
    document.querySelector("body").classList.toggle("dark");    
    /* crear un div azul con transition: all 0.3s ease-in 0s; para hacer más smooth el cambio */
}
