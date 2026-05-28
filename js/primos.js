// EJEMPLO CORRECTO
function usarEjemploPrimo() {

    document.getElementById("codigo").value =
    10000019;

}


// EJEMPLO ERROR
function usarEjemploError() {

    document.getElementById("codigo").value =
    1234;

}



// VERIFICAR SEGURIDAD
function verificarPrimo() {

    let codigo =
    document.getElementById("codigo").value;

    codigo = parseInt(codigo);


    // VALIDAR CAMPO VACÍO
    if(isNaN(codigo)) {

        alert(
        "Por favor ingrese un código médico."
        );

        return;
    }


    // VALIDAR 8 DÍGITOS
    if(codigo.toString().length < 8){

        document.getElementById(
        "resultadoPrimo"
        ).innerHTML = `

        <div class="historial-clinico">

            <h2>
                ⚠ Error de Seguridad
            </h2>

            <div class="paciente-info">

                <p>
                    <strong>
                    Código ingresado:
                    </strong>

                    ${codigo}
                </p>

                <p>
                    ❌ El código no cumple
                    con el estándar de
                    seguridad hospitalaria.
                </p>

                <p>
                    Se requiere un mínimo
                    de
                    <strong>
                    8 dígitos
                    </strong>
                    para mayor seguridad.
                </p>

                <p>
                    Ejemplo recomendado:
                    <strong>
                    10000019
                    </strong>
                </p>

            </div>

        </div>
        `;

        return;
    }


    // VERIFICAR SI ES PRIMO
    let esPrimo = true;

    if(codigo <= 1){

        esPrimo = false;
    }

    for(let i = 2;
        i < codigo;
        i++){

        if(codigo % i === 0){

            esPrimo = false;
            break;
        }
    }


    // SUGERENCIAS
    let sugerencias = "";

    let contador = 0;
    let numero = codigo + 1;


    while(contador < 3){

        let primo = true;

        for(let i = 2;
            i < numero;
            i++){

            if(numero % i === 0){

                primo = false;
                break;
            }
        }

        if(primo){

            sugerencias += `
            <li>
                Código seguro:
                ${numero}
            </li>
            `;

            contador++;
        }

        numero++;
    }


    // RESULTADO FINAL
    if(esPrimo){

        document.getElementById(
        "resultadoPrimo"
        ).innerHTML = `

        <div class="historial-clinico">

            <h2>
                🔐 Resultado de Seguridad
            </h2>

            <div class="paciente-info">

                <p>
                    <strong>
                    Código ingresado:
                    </strong>

                    ${codigo}
                </p>

                <p>
                    🟢 Código Médico Seguro
                </p>

            </div>

        </div>
        `;

    } else {

        document.getElementById(
        "resultadoPrimo"
        ).innerHTML = `

        <div class="historial-clinico">

            <h2>
                🔐 Resultado de Seguridad
            </h2>

            <div class="paciente-info">

                <p>
                    <strong>
                    Código ingresado:
                    </strong>

                    ${codigo}
                </p>

                <p>
                    🔴 Código Médico Poco Seguro
                </p>

            </div>

            <h3>
                Recomendación de
                códigos seguros
            </h3>

            <ul class="lista-primos">

                ${sugerencias}

            </ul>

        </div>
        `;
    }

}