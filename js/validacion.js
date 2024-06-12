function validar() {
    var retorno_usuario = validar_usuario();
    var retorno_password = validar_password();
    var retorno_password_confirm = validar_password_confirm();
    var retorno_direccion = validar_direccion();
    var retorno_comuna = validar_comuna();
    var retorno_telefono = validar_telefono();
    var retorno_url = validar_url();
    var retorno_aficiones = validar_aficiones();
    return retorno_usuario && retorno_password && retorno_password_confirm && retorno_direccion && retorno_comuna && retorno_telefono && retorno_url && retorno_aficiones;
}


function validar_usuario() {
    var input_usuario = document.getElementById("input-usuario");
    var div_error_usuario = document.getElementById("error-usuario");
    var usuario = input_usuario.value;
    if (usuario == "") {
        div_error_usuario.innerHTML = "El usuario es obligatorio";
        div_error_usuario.className = "text-danger small mt-1";
        return false;
    } else if (usuario.length < 5 || usuario.length > 10) {
        div_error_usuario.innerHTML = "El usuario debe tener entre 5 y 10 caracteres";
        div_error_usuario.className = "text-danger small mt-1";
        return false;
    } else if (!isLetter(usuario.charAt(0))) {
        div_error_usuario.innerHTML = "El usuario debe comenzar con una letra";
        div_error_usuario.className = "text-danger small mt-1";
        return false;
    } else {
        var tiene_digito = false;
        for (var i = 0; i < usuario.length; i++) {
            if (isNumber(usuario.charAt(i))) {
                tiene_digito = true;
                break;
            }
        }
        if (tiene_digito && !isNumber(usuario.charAt(usuario.length - 1)) && !isNumber(usuario.charAt(usuario.length - 2))) {
            div_error_usuario.innerHTML = "Si el usuario contiene dígitos, deben estar en los últimos 2 lugares";
            div_error_usuario.className = "text-danger small mt-1";
            return false;
        } else {
            for (var i = 0; i < usuario.length; i++) {
                if (!isLetter(usuario.charAt(i)) && !isNumber(usuario.charAt(i))) {
                    div_error_usuario.innerHTML = "El usuario solo puede contener letras y números";
                    div_error_usuario.className = "text-danger small mt-1";
                    return false;
                }
            }
            div_error_usuario.innerHTML = "";
            return true;
        }
    }
}

function isLetter(char) {
    var ascii = char.charCodeAt(0);
    return (ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122);
}

function isNumber(char) {
    var ascii = char.charCodeAt(0);
    return ascii >= 48 && ascii <= 57;
}




function validar_password() {
    var password = document.getElementById("input-password").value;
    var div_error_password = document.getElementById("error-password");
    if (password == "") {
        div_error_password.innerHTML = "La contraseña es obligatoria";
        div_error_password.className = "text-danger small mt-1";
        return false;
    } else if (password.length < 3 || password.length > 6) {
        div_error_password.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres";
        div_error_password.className = "text-danger small mt-1";
        return false;
    } else {
        var tiene_digito = false;
        var tiene_letra = false;
        for (var i = 0; i < password.length; i++) {
            if (isNaN(password.charAt(i))) {
                tiene_letra = true;
            } else {
                tiene_digito = true;
            }
        }
        if (!tiene_digito || !tiene_letra) {
            div_error_password.innerHTML = "La contraseña debe tener al menos un dígito y una letra";
            div_error_password.className = "text-danger small mt-1";
            return false;
        } else {
            div_error_password.innerHTML = "";
            return true;
        }
    }
}


function validar_password_confirm() {
    var password_confirm = document.getElementById("input-password-confirm").value;
    var div_error_password_confirm = document.getElementById("error-password-confirm");
    if (password_confirm == "") {
        div_error_password_confirm.innerHTML = "La confirmación de contraseña es obligatoria";
        div_error_password_confirm.className = "text-danger small mt-1";
        return false;
    } else if (password_confirm != document.getElementById("input-password").value) {
        div_error_password_confirm.innerHTML = "La confirmación de contraseña no coincide con la contraseña";
        div_error_password_confirm.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_password_confirm.innerHTML = "";
        return true;
    }
}

function validar_direccion() {
    var direccion = document.getElementById("input-direccion").value;
    var div_error_direccion = document.getElementById("error-direccion");
    if (direccion == "") {
        div_error_direccion.innerHTML = "La dirección es obligatoria";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    if (select_comuna.value == "default") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}

function validar_telefono() {
    var telefono = document.getElementById("input-telefono").value;
    var div_error_telefono = document.getElementById("error-telefono");
    if (telefono == "") {
        div_error_telefono.innerHTML = "El teléfono es obligatorio";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else if (!telefono.startsWith("+569") || telefono.length !== 12) {
        div_error_telefono.innerHTML = "El teléfono debe comenzar con '+569' y tener 8 dígitos";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else if (!es_numero_entero(telefono)) {
        div_error_telefono.innerHTML = "Solo se permiten números enteros";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_telefono.innerHTML = "";
        return true;
    }
}

function es_numero_entero(telefono) {
    for (var i = 0; i < telefono.length; i++) {
        if (!isNaN(telefono[i]) || telefono[i]=='+') {
            continue;
        } else {
            return false;
        }
    }
    return true;
}


function validar_url() {
    var url = document.getElementById("input-url").value;
    var div_error_url = document.getElementById("error-url");
    if (url == "") {
        div_error_url.innerHTML = "La URL es obligatoria";
        div_error_url.className = "text-danger small mt-1";
        return false;
    } else if (!url.includes("http://") && !url.includes("https://")) {
        div_error_url.innerHTML = "La URL debe comenzar con http:// o https://";
        div_error_url.className = "text-danger small mt-1";
        return false;
    } else {
        var dominio = "";
        var i = url.indexOf(".");
        if (i == -1) {
            div_error_url.innerHTML = "La URL debe tener un dominio válido";
            div_error_url.className = "text-danger small mt-1";
            return false;
        } else {
            dominio = url.substring(i + 1);
            if (dominio.indexOf(".") != -1) {
                div_error_url.innerHTML = "La URL solo puede tener un punto en el dominio";
                div_error_url.className = "text-danger small mt-1";
                return false;
            } else {
                div_error_url.innerHTML = "";
                return true;
            }
        }
    }
}


function validar_aficiones() {
    var aficiones = document.getElementById("input-aficiones").value;
    var div_error_aficiones = document.getElementById("error-aficiones");
    var aficiones_lista = aficiones.split(",");
    
    if (aficiones == "") {
        div_error_aficiones.innerHTML = "Debes ingresar al menos 2 aficiones";
        div_error_aficiones.className = "text-danger small mt-1";
        return false;
    } else if (aficiones_lista.length < 2) {
        div_error_aficiones.innerHTML = "Debes ingresar al menos 2 aficiones separadas por una coma";
        div_error_aficiones.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_aficiones.innerHTML = "";
        return true;
    }
}


