// SELECCIONAMOS EL FORMULARIO

const formulario = document.getElementById("registroForm");

// EVENTO SUBMIT

formulario.addEventListener("submit", function(evento) {

    // Evita que la página se recargue

    evento.preventDefault();

    // LIMPIAR MENSAJES

    document.querySelectorAll(".campo small").forEach(function(mensaje) {

        mensaje.textContent = "";

    });

    document.querySelectorAll(

        ".campo input, .campo select"

    ).forEach(function(campo) {

        campo.classList.remove("invalido");

    });

    // Ocultar mensaje de éxito

    document.getElementById("mensajeExito")

        .classList.remove("mostrar");

    // VARIABLE DE VALIDACIÓN

    let formularioValido = true;

    // OBTENER DATOS

    const nombre =

        document.getElementById("nombre").value.trim();

    const correo =

        document.getElementById("correo").value.trim();

    const telefono =

        document.getElementById("telefono").value.trim();

    const edad =

        Number(document.getElementById("edad").value);

    const carrera =

        document.getElementById("carrera").value;

    const modalidad =

        document.getElementById("modalidad").value;

    const terminos =

        document.getElementById("terminos").checked;

    // VALIDAR NOMBRE

    if (nombre.length < 3) {

        document.getElementById("errorNombre").textContent =

            "Ingrese su nombre completo.";

        document.getElementById("nombre")

            .classList.add("invalido");

        formularioValido = false;

    }

    // VALIDAR CORREO

    const expresionCorreo =

        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {

        document.getElementById("errorCorreo").textContent =

            "Ingrese un correo electrónico válido.";

        document.getElementById("correo")

            .classList.add("invalido");

        formularioValido = false;

    }

    // VALIDAR TELÉFONO

    if (!/^\d{9}$/.test(telefono)) {

        document.getElementById("errorTelefono").textContent =

            "Ingrese un número de 9 dígitos.";
 
        document.getElementById("telefono")

            .classList.add("invalido");

        formularioValido = false;

    }

    // VALIDAR EDAD

    if (isNaN(edad) || edad < 14 || edad > 80) {

        document.getElementById("errorEdad").textContent =

            "Ingrese una edad válida entre 14 y 80 años.";

        document.getElementById("edad")

            .classList.add("invalido");

        formularioValido = false;

    }

    // VALIDAR CARRERA

    if (carrera === "") {

        document.getElementById("errorCarrera").textContent =

            "Seleccione una carrera.";

        document.getElementById("carrera")

            .classList.add("invalido");

        formularioValido = false;

    }

    // VALIDAR MODALIDAD

    if (modalidad === "") {

        document.getElementById("errorModalidad").textContent =

            "Seleccione una modalidad.";

        document.getElementById("modalidad")

            .classList.add("invalido");

        formularioValido = false;

    }

    // VALIDAR TÉRMINOS

    if (!terminos) {

        document.getElementById("errorTerminos").textContent =

            "Debe aceptar el uso de sus datos.";

        formularioValido = false;

    }

    // RESULTADO

    if (formularioValido) {

        document.getElementById("mensajeExito")

            .classList.add("mostrar");

        // Simulación del procesamiento

        console.log("Registro enviado:", {

            nombre: nombre,

            correo: correo,

            telefono: telefono,
            edad: edad,
            carrera: carrera,

            modalidad: modalidad

        });
        // Limpiar formulario

        formulario.reset();

    }

});



