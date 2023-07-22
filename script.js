var cuentas = [
    { nombre: "Mali", saldo: 200, codigo: "101", cuenta: "01", password: "1234" },
    { nombre: "Gera", saldo: 290, codigo: "101", cuenta: "02", password: "1234" },
    { nombre: "Maui", saldo: 67, codigo: "101", cuenta: "03", password: "1234" }
];
function añadirCuentas() {
    for (let i in cuentas) {
        let Select = document.getElementById("sMenuCuentas")
        let option = document.createElement('option')
        option.value = cuentas[i].cuenta
        option.text = cuentas[i].nombre
        document.getElementById("sMenuCuentas").appendChild(option)
    }
}
function ValidarContraseña() {
    let Cuenta = document.getElementById("sMenuCuentas").value
    let Contraseña = document.getElementById("inputContraseña").value
    console.log(Cuenta + "  -  " + Contraseña)
    let sPassword = ""
    for (let index = 0; index < cuentas.length; index++) {
        if (Cuenta == cuentas[index].cuenta) {
            sPassword = index
        }
    }
    if (Contraseña == cuentas[sPassword].password) {
        console.log("Login Exitoso")
        document.getElementById("Opciones").style.display = "block"
        let boton1 = document.createElement("button")
        boton1.type = "submit"
        boton1.id = "btnEnviar"
        boton1.textContent = "Procesar"
        boton1.addEventListener("click", operaciones)
        document.getElementById("Results").appendChild(boton1)

    } else {
        console.log("Login fallido intente nuevamente")
    }

}
function operaciones() {
    let sUser = ""
    let Cuenta = document.getElementById("sMenuCuentas").value
    for (let index = 0; index < cuentas.length; index++) {
        if (Cuenta == cuentas[index].cuenta) {
            sUser = index
        }
    }
    let opcionUsada = document.getElementById("Opciones").value
    let opt = ""
    if (opcionUsada == 1) {
        let label = document.createElement("label")
        label.innerHTML = "Saldo Actual"
        document.getElementById("Results").appendChild(label)
        let input = document.createElement("input")
        input.value = cuentas[sUser].saldo
        document.getElementById("Results").appendChild(input)
    } else if (opcionUsada == 2) {
        if (cuentas[sUser].saldo > 9 && cuentas[sUser].saldo < 990) {
            let label2 = document.createElement("label")
            label2.innerHTML = "Ingrese Saldo"
            document.getElementById("Results").appendChild(label2)
            let input2 = document.createElement("input")
            input2.id = "valorM"
            document.getElementById("Results").appendChild(input2)
            let boton2 = document.createElement("button")
            boton2.textContent = "Ingresar"
            boton2.onclick = () => {
                cuentas[sUser].saldo += parseInt(document.getElementById("valorM").value)
                console.log(cuentas[sUser].saldo)
                window.alert("Nuevo saldo:" + cuentas[sUser].saldo)
            }
            document.getElementById("Results").appendChild(boton2)
        }
    } else if (opcionUsada = 3) {
        if (cuentas[sUser].saldo > 9 && cuentas[sUser].saldo < 990) {
            let label3 = document.createElement("label")
            label3.innerHTML = "Retirar Saldo"
            document.getElementById("Results").appendChild(label3)
            let input3 = document.createElement("input")
            input3.id = "valorM"
            document.getElementById("Results").appendChild(input3)
            let boton3 = document.createElement("button")
            boton3.textContent = "Retirar"
            boton3.onclick = () => {
                if (cuentas[sUser].saldo - parseInt(document.getElementById("valorM").value) > 9) {
                    cuentas[sUser].saldo -= parseInt(document.getElementById("valorM").value)
                    window.alert("Nuevo saldo:" + cuentas[sUser].saldo)
                    let input4 = document.createElement("input")
                    input4.value = cuentas[sUser].saldo
                    input4.disabled = true
                    document.getElementById("Results").appendChild(input4)
                } else {
                    window.alert("El saldo no puede ser inferior a 9, por lo que no se va a hacer el retiro")
                    console.log(cuentas[sUser].saldo)
                }
            }
            document.getElementById("Results").appendChild(boton3)
        }
    }

}