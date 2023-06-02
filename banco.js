console.log("Banco");

const formulario = document.getElementById("formulario");
const tasaInteres = 0.91;


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let monto = document.getElementById("monto").value;
    let plazo = document.getElementById("plazo").value;
    let interes = (monto * tasaInteres * plazo) / 12;
    let total = parseFloat(monto) + parseFloat(interes);

    mostrarMensaje(interes, total);
})

const mostrarMensaje = (interes, total) => {
    formulario.innerHTML = `
    <strong> El interés generado es de $${interes.toFixed(2)} y el monto total a recibir $ ${total.toFixed(2)} </strong>
    <div class="from-group">
        <h2>Ingrese sus datos</h2>
        <label for="nombre">Nombre</label>
        <input type="text" class="form-control" id="nombre"> <br>
        <label for="apellido">Apellido</label>
        <input type="text" class="form-control" id="apellido"> <br>
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email"> <br>

        <button class="btn botonMio" id="crearPF"> Crear Plazo Fijo </button>
    </div>
    `

    const crearPF = document.getElementById("crearPF");
    crearPF.addEventListener("click", () => {
        Swal.fire("En breve nos comunicaremos con usted");

        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const email = document.getElementById("email");

        const datos = {
            nombre: nombre.value,
            apellido: apellido.value,
            email: email.value,
            interes: interes,
            total: total
        }

        //Lo guardo en el localStorage: 
        localStorage.setItem("datos", JSON.stringify(datos));
    })
}