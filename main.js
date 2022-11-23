const formulario = document.querySelector("#frm1");
formulario.addEventListener("submit", depreciacion);

/* let fechaCompra = document.querySelector("#fechaCompra").value;
let fechaDepreciacion = document.querySelector("#fechaDepreciacion").value; */


function depreciacion(params) {
    params.preventDefault();
    let activo = parseInt(document.querySelector("#activo").value);
    let precioCompra = parseFloat(document.querySelector("#precioCompra").value);
    let valorResidual = document.getElementById("valorResidual");
    valorResidual.textContent += CalcularValorResidual(activo,precioCompra).toString();
}

function CalcularValorResidual(activo,precioCompra) {
    let valorResidual = parseFloat(0);
    switch (activo) {
        case 1:
            valorResidual = precioCompra / 3;
            break;
        case 2:
            valorResidual = precioCompra / 20;
            break;
        case 3:
            valorResidual = precioCompra / 5;
            break;
    }
    return valorResidual;
}