class Activos {
    constructor(vidaUtilAnios) {
        this.vidaUtilAnios = vidaUtilAnios;
    }
}

class Depreciacion {
    constructor(n, vCompra, fCompra, tDepreciacion, vDepreciacion, vActual) {
        this.n = n;
        this.vCompra = vCompra;
        this.fCompra = fCompra;
        this.tDepreciacion = tDepreciacion;
        this.vDepreciacion = vDepreciacion;
        this.vActual = vActual;
    }
}

const formulario = document.querySelector("#frm1");
formulario.addEventListener("submit", depreciacion);

let activo = new Activos();
let listaDatos = Array();
let fila = Array();


function depreciacion(params) {
    params.preventDefault();
    let activo = parseInt(document.querySelector("#activo").value);
    ObtenerValoresActivoSeleccionado(activo);
    let precioCompra = parseFloat(document.querySelector("#precioCompra").value);
    let fechaCompra = new Date(document.querySelector("#fechaCompra").value);
    let anioFechaCompra = fechaCompra.getFullYear();
    let mesFechaCompra = fechaCompra.getUTCMonth() + 1;
    let fechaDepreciacion = new Date(document.querySelector("#fechaDepreciacion").value);
    let anioFechaDepreciacion = fechaDepreciacion.getFullYear();
    let mesFechaDepreciacion = fechaDepreciacion.getMonth() + 1;
    let valorResidualS = document.getElementById("valorResidual");
    let valorResidual = parseFloat(CalcularValorResidual(precioCompra, activo));
    valorResidualS.textContent += valorResidual;


    let limite = anioFechaDepreciacion - anioFechaCompra;
    let tDepreciacion = 12 - (mesFechaCompra - 1);
    let valorDepreciacion_X_Mes = CalcularValorDepreciacion_X_Mes(precioCompra, valorResidual);
    let vActual;
    let vDepreciacion = tDepreciacion * valorDepreciacion_X_Mes;

    if (anioFechaCompra != anioFechaDepreciacion) {
        for (let i = 0; i <= limite; i++) {
            let n = i + 1;
            let fCompra = anioFechaCompra + i;

            if (i == 0) {
                fila.push(new Depreciacion(n, precioCompra, fCompra, tDepreciacion, vDepreciacion, vActual = precioCompra - vDepreciacion));
            }
            tDepreciacion = 12;
            vDepreciacion = tDepreciacion * valorDepreciacion_X_Mes;
            if ((i > 0) && (i < limite)) {
                fila.push(new Depreciacion(n, precioCompra, fCompra, tDepreciacion, vDepreciacion, ((vActual -= vDepreciacion) > valorResidual) ? vActual : valorResidual));
            }
            tDepreciacion = mesFechaDepreciacion;
            vDepreciacion = tDepreciacion * valorDepreciacion_X_Mes;
            if (i == limite) {
                fila.push(new Depreciacion(n, precioCompra, fCompra, tDepreciacion, vDepreciacion, ((vActual -= vDepreciacion) > valorResidual) ? vActual : valorResidual));
            }
        }
    } else {
        tDepreciacion = (mesFechaDepreciacion - mesFechaCompra) + 1;
        vDepreciacion = tDepreciacion * valorDepreciacion_X_Mes;
        fila.push(new Depreciacion(1, precioCompra, anioFechaCompra, tDepreciacion, vDepreciacion, vActual = precioCompra - vDepreciacion));
    }

    let salida = document.querySelector("table");
    salida.createTBody;
    for (const iterator of fila) {
        var columna1 = Object.values(iterator)[0];
        var columna2 = Object.values(iterator)[1];
        var columna3 = Object.values(iterator)[2];
        var columna4 = Object.values(iterator)[3];
        var columna5 = Object.values(iterator)[4];
        var columna6 = Object.values(iterator)[5];

        salida.insertAdjacentHTML("beforeend", "<tr>" + "<td>" + columna1 + "</td>" + "<td>" + columna2 + "</td>" + "<td>" + columna3 + "</td>" + "<td>" + columna4 + "</td>" + "<td>" + columna5 + "</td>" + "<td>" + columna6 + "</td>" + "</tr>");
    }
}

function ObtenerValoresActivoSeleccionado(activo_) {
    let opcion = activo_;
    switch (opcion) {
        case 1:
            activo.vidaUtilAnios = 3;
            break;
        case 2:
            activo.vidaUtilAnios = 20;
            break;
        case 3:
            activo.vidaUtilAnios = 5;
            break;
    }
}

function CalcularValorResidual(precioCompra_, activo_) {
    activo_ = activo.vidaUtilAnios;
    let valorResidual = precioCompra_ / activo_;
    return valorResidual.toFixed(2);
}

function CalcularValorDepreciacion_X_Mes(precioCompra_, valorResidual_) {
    let valorDepreciacion = ((precioCompra_ - valorResidual_) / activo.vidaUtilAnios) / 12;
    return valorDepreciacion.toFixed(2);
}


function recargar() {
    window.location.reload();
}