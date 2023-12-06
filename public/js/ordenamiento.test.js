let contenedor, new_items

function ordenar_Z_a() {
    contenedor = document.getElementById('contenedor-productos')
    new_items = document.querySelectorAll(".producto")

    let bloques_array = Array.from(new_items)

    bloques_array.sort((a,b) => {
        return parseInt(a.children[1].children[1].textContent.substring(1)) - parseInt(parseInt(b.children[1].children[1].textContent.substring(1)))
    }).reverse()

    re_build(bloques_array, contenedor)
}

function ordenar_a_Z() {
    contenedor = document.getElementById('contenedor-productos')
    new_items = document.querySelectorAll(".producto")

    let bloques_array = Array.from(new_items)

    bloques_array.sort((a,b) => {
        return parseInt(a.children[1].children[1].textContent.substring(1)) - parseInt(parseInt(b.children[1].children[1].textContent.substring(1)))
    })

    re_build(bloques_array, contenedor)
}

function re_build(lista, bloque){
    lista.forEach(item => bloque.removeChild(item));
    lista.forEach(item => bloque.appendChild(item));
}