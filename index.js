document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("ingresoTexto");
    var containerCopiar = document.getElementById("containerCopiar");
    var encriptarButton = document.getElementById("encriptarButton");
    var desencriptarButton = document.getElementById("desencriptarButton");

    const vocal = ["e", "i", "a", "o", "u"];
    const vocalEncriptada = ["enter", "imes", "ai", "ober", "uber"];

    var textoGenerado = document.getElementById("textoGenerado");

    textarea.addEventListener("input", function() {
        var textoIngresado = textarea.value;
        var textoFiltrado = filtrarTexto(textoIngresado);
        textarea.value = textoFiltrado;
    });

    encriptarButton.addEventListener("click", function() {
        var textoIngresado = textarea.value.trim(); // Trima los espacios en blanco alrededor del texto

        if (textoIngresado.length !== 0) {
            var textoEncriptado = encriptarTexto(textoIngresado);

            if (textoGenerado) {
                textoGenerado.textContent = textoEncriptado;
            } else {
                textoGenerado = document.createElement("div");
                textoGenerado.id = "textoGenerado";
                textoGenerado.textContent = textoEncriptado;
                containerCopiar.parentNode.replaceChild(textoGenerado, containerCopiar);
            }
        } else {
            textoGenerado.parentNode.replaceChild(containerCopiar, textoGenerado);
            alert("¡No ingresó ningún texto!");
        }
    });

    desencriptarButton.addEventListener("click", function() {
        var textoEncriptado = textarea.value;

        var textoDesencriptado = desencriptarTexto(textoEncriptado);

        if (textoDesencriptado.length != 0) {
            if (textoGenerado) {
                textoGenerado.textContent = textoDesencriptado;
            } else {
                textoGenerado = document.createElement("div");
                textoGenerado.id = "textoGenerado";
                textoGenerado.textContent = textoDesencriptado;
                containerCopiar.parentNode.replaceChild(textoGenerado, containerCopiar);
            }
        } else {
            textoGenerado.parentNode.replaceChild(containerCopiar, textoGenerado);
            alert("¡No ingresó ningún texto!");
        }
    });

    function filtrarTexto(texto) {
        var expresionRegular = /^[a-z\s]+$/;
        var textoFiltrado = texto.toLowerCase().replace(/[^a-z\s]/g, "");

        if (expresionRegular.test(textoFiltrado)) {
            return textoFiltrado;
        } else {
            return "";
        }
    }

    function encriptarTexto(texto) {
        for (let i = 0; i < vocal.length; i++) {
            texto = texto.replaceAll(vocal[i], vocalEncriptada[i]);
        }

        return texto;
    }

    function desencriptarTexto(textoEncriptado) {
        for (let i = 0; i < vocal.length; i++) {
            textoEncriptado = textoEncriptado.replaceAll(vocalEncriptada[i], vocal[i]);
        }

        return textoEncriptado;
    }
});
