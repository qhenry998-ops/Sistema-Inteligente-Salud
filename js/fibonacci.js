// DATOS DE EJEMPLO
function usarEjemplo() {

    document.getElementById("nombre").value =
    "María Fernández";

    document.getElementById("edad").value =
    42;

    document.getElementById("diagnostico").value =
    "Hipertensión arterial";

    document.getElementById("controles").value =
    8;
}



// GENERAR SEGUIMIENTO
function generarSeguimiento() {

    let nombre =
    document.getElementById("nombre").value;

    let edad =
    parseInt(document.getElementById("edad").value);

    let diagnostico =
    document.getElementById("diagnostico").value;

    let controles =
    parseInt(
    document.getElementById("controles").value
    );

    // VALIDACIÓN
    if(
        nombre === "" ||
        diagnostico === "" ||
        isNaN(edad) ||
        isNaN(controles)
    ){

        alert(
        "Por favor complete todos los campos."
        );

        return;
    }


    // FIBONACCI
    let a = 0;
    let b = 1;

    let historial = "";

    for(let i = 1; i <= controles; i++){

        historial += `
        <div class="control-item">

            <i class="fa-solid fa-calendar-check"></i>

            <span>
                Control ${i}:
                ${b} día(s)
            </span>

        </div>
        `;

        let siguiente = a + b;
        a = b;
        b = siguiente;
    }


    // ESTADO
    let estado = "";

    if(controles >= 6){

        estado =
        "🟢 Seguimiento Médico Completo";

    }else{

        estado =
        "🟡 Seguimiento Médico Básico";
    }


    // HISTORIAL CLÍNICO
    document.getElementById(
    "resultado"
    ).innerHTML = `

    <div class="historial-clinico">

        <h2>
            🩺 Historial Clínico de Seguimiento
        </h2>

        <div class="paciente-info">

            <p>
                <strong>Paciente:</strong>
                ${nombre}
            </p>

            <p>
                <strong>Edad:</strong>
                ${edad} años
            </p>

            <p>
                <strong>Diagnóstico:</strong>
                ${diagnostico}
            </p>

            <p>
                <strong>Estado:</strong>
                ${estado}
            </p>

        </div>

        <h3>
            📅 Cronograma de controles
        </h3>

        <div class="controles-box">

            ${historial}

        </div>

    </div>

    `;
}