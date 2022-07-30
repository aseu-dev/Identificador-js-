function isInteger(valor) {

    valor = parseInt(valor)
    if(isNaN(valor)){
        return false
    }

}
function identificador() {

    let nombre = prompt('Ingrese su nombre');
    let terminar = (nombre == '') ? close() : null;
    let nombre2 = prompt('Ingrese su segundo nombre, en caso de que lo posea');
    let apellido = prompt('Ingrese su apellido');
    while (true) {

        var dni = prompt('Ingrese su dni')
        if(dni == ''){

            alert('Debes ingresar tu dni')

        }
        else if(isInteger(dni) == false){

            alert('El DNI solo debe contener numeros');
            continue
        }
        else if(dni.length < 7 || dni.length > 8){

            alert('Tu DNI debe tener entre 7 y 8 numeros');

        }
        else{
            break
        }
    };
    let id = 'Tu ID es: ' + nombre + String(apellido.length) + String(dni.substr(0,3))
    alert(id)
}
identificador()
