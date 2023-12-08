const emailTest = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

const formContact = document.querySelector('.form_contact_display');

const validarFormulario = e => {
    e.preventDefault()

    const nombre = e.target.querySelector('#nombre')
    const correo = e.target.querySelector('#correo')
    const telefono = e.target.querySelector('#tel')
    const mensaje = e.target.querySelector('#mensaje')

    const error = (input, contenedor, id, mensaje) => {
        const container = document.getElementById(contenedor);

        if (document.getElementById(id))
            container.removeChild(document.getElementById(id))

        const errorElement = document.createElement('P')
        errorElement.classList.add('error-group')
        errorElement.textContent = `* ${mensaje}`
        errorElement.setAttribute('id', id)
        container.appendChild(errorElement)
        input.classList.add('error-input')
    }

    //Validacion del campo del nombre
    if (nombre.value.length <= 0) {
        error(nombre, 'form_container_nombre', 'error_nombre', 'El nombre es obligatorio')
    } else {
        /* Limpiamos el error */
        if (document.getElementById('error_nombre')) {
            nombre.classList.remove('error-input')
            document.querySelector('#form_container_nombre').removeChild(document.getElementById('error_nombre'))
        }
    }

    /* VALIDAR QUE EL CORREO SEA MAYOR A 0*/
    if (correo.value.length <= 0) {
        error(correo, 'form_container_correo', 'error_correo', 'El correo es obligatorio')
    } else {
        /* Limpiamos el error */
        if (document.getElementById('error_correo')) {
            correo.classList.remove('error-input')
            document.querySelector('#form_container_correo').removeChild(document.getElementById('error_correo'))
        }
    }

    /* VALIDAR QUE EL CORREO SEA VALIDO */
    if (correo.value.length > 0 && !emailTest.test(correo.value)) {
        error(correo, 'form_container_correo', 'error_correo_no_valido', 'El correo no es válido. Intente de nuevo')
    } else {
        /* Limpiamos el error */
        if (document.getElementById('error_correo_no_valido')) {
            correo.classList.remove('error-input')
            document.querySelector('#form_container_correo').removeChild(document.getElementById('error_correo_no_valido'))
        }
    }

    /* Validacion del numero de telefono */
    if (telefono.value.length <= 0) {
        error(telefono, 'form_container_telefono', 'error_telefono', 'El número telefono debe ser obligatorio')
    } else {
        /* Limpiamos el error */
        if (document.getElementById('error_telefono')) {
            telefono.classList.remove('error-input')
            document.querySelector('#form_container_telefono').removeChild(document.getElementById('error_telefono'))
        }
    }

    /* form_container_mensaje */
    if (mensaje.value.length <= 0) {
        error(mensaje, 'form_container_mensaje', 'error_mensaje', '¡Debes agregar un mensaje!')
    } else {
        /* Limpiamos el error */
        if (document.getElementById('error_mensaje')) {
            mensaje.classList.remove('error-input')
            document.querySelector('#form_container_mensaje').removeChild(document.getElementById('error_mensaje'))
        }
    }

    if (
        nombre.value.length <= 0 ||
        correo.value.length <= 0 ||
        !emailTest.test(correo) <= 0 ||
        telefono.value.length <= 0 ||
        mensaje.value.length <= 0) {
        return
    }

    e.target.submit();
}

if (formContact) {
    formContact.addEventListener('submit', validarFormulario)

}