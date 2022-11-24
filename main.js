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
let fila = Array();


function depreciacion(params) {
    params.preventDefault();
    let activo = parseInt(document.querySelector("#activo").value);
    ObtenerValoresActivoSeleccionado(activo);
    let precioCompra = parseFloat(document.querySelector("#precioCompra").value);
    /* let fechaCompra = new Date(document.querySelector("#fechaCompra").value);
    let anioFechaCompra = fechaCompra.getFullYear();
    let mesFechaCompra = fechaCompra.getUTCMonth() + 1;
    let fechaDepreciacion = new Date(document.querySelector("#fechaDepreciacion").value);
    let anioFechaDepreciacion = fechaDepreciacion.getFullYear();
    let mesFechaDepreciacion = fechaDepreciacion.getMonth() + 1; */
    let valorResidual = document.getElementById("valorResidual");
    valorResidual.textContent += CalcularValorResidual(precioCompra, activo);
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