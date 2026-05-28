// EJEMPLO CORRECTO
function usarEjemploCombinado() {

    document.getElementById("nombre").value =
    "María Fernández";

    document.getElementById("edad").value =
    42;

    document.getElementById("diagnostico").value =
    "Hipertensión arterial";

    document.getElementById("codigo").value =
    10000019;

    document.getElementById("controles").value =
    8;
}



// EJEMPLO ERROR
function usarErrorCombinado() {

    document.getElementById("nombre").value =
    "Pedro Rojas";

    document.getElementById("edad").value =
    35;

    document.getElementById("diagnostico").value =
    "Diabetes";

    document.getElementById("codigo").value =
    1234;

    document.getElementById("controles").value =
    4;
}



// GENERAR SISTEMA
function generarSistema() {

    let nombre =
    document.getElementById("nombre").value;

    let edad =
    parseInt(
    document.getElementById("edad").value
    );

    let diagnostico =
    document.getElementById(
    "diagnostico"
    ).value;

    let codigo =
    document.getElementById(
    "codigo"
    ).value;

    let controles =
    parseInt(
    document.getElementById(
    "controles"
    ).value
    );


    // VALIDAR CAMPOS
    if(
        nombre === "" ||
        diagnostico === "" ||
        isNaN(edad) ||
        isNaN(controles)
    ){

        alert(
        "Complete todos los campos."
        );

        return;
    }


    // VALIDAR CÓDIGO
    if(codigo.length < 8){

        document.getElementById(
        "resultadoCombinado"
        ).innerHTML = `

        <div class="historial-clinico">

            <h2>
                ⚠ Error de Seguridad
            </h2>

            <div class="paciente-info">

                <p>
                    El código médico:
                    <strong>
                    ${codigo}
                    </strong>
                </p>

                <p>
                    ❌ No cumple con
                    el mínimo de
                    seguridad hospitalaria.
                </p>

                <p>
                    Debe contener
                    al menos
                    <strong>
                    8 dígitos
                    </strong>.
                </p>

            </div>

        </div>
        `;

        return;
    }



    // PRIMO
    let numero = parseInt(codigo);

    let esPrimo = true;

    if(numero <= 1){

        esPrimo = false;
    }

    for(let i = 2;
        i < numero;
        i++){

        if(numero % i === 0){

            esPrimo = false;
            break;
        }
    }



    // FIBONACCI
    let a = 0;
    let b = 1;

    let historial = "";

    let fibonacciPrimos = [];

    for(let i = 1;
        i <= controles;
        i++){

        historial += `
        <div class="control-item">

            <i class="fa-solid fa-calendar-check"></i>

            <span>
                Control ${i}:
                ${b} día(s)
            </span>

        </div>
        `;

        // verificar primo fibonacci
        let primoFib = true;

        if(b <= 1){

            primoFib = false;
        }

        for(let j = 2;
            j < b;
            j++){

            if(b % j === 0){

                primoFib = false;
                break;
            }
        }

        if(primoFib){

            fibonacciPrimos.push(b);
        }

        let siguiente = a + b;
        a = b;
        b = siguiente;
    }



    // NIVEL RIESGO
    let riesgo = "";

    if(edad < 40){

        riesgo =
        "🟢 Riesgo Bajo";

    }else if(edad <= 60){

        riesgo =
        "🟡 Riesgo Moderado";

    }else{

        riesgo =
        "🔴 Riesgo Alto";
    }



    // RESULTADO
    document.getElementById(
    "resultadoCombinado"
    ).innerHTML = `

    <div class="historial-clinico">

        <h2>
            🧠 Historial Clínico Inteligente
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
                <strong>Código Médico:</strong>
                ${codigo}
            </p>

            <p>
                <strong>Seguridad:</strong>
                ${esPrimo ?
                "🟢 Código Seguro":
                "🔴 Código Poco Seguro"}
            </p>

            <p>
                <strong>Nivel de Riesgo:</strong>
                ${riesgo}
            </p>

        </div>

        <h3>
            📅 Cronograma Médico Fibonacci
        </h3>

        <div class="controles-box">

            ${historial}

        </div>

        <br>

        <h3>
            🔢 Fibonacci que también son primos
        </h3>

        <div class="paciente-info">

            ${fibonacciPrimos.join(", ")}

        </div>

    </div>
    `;
}