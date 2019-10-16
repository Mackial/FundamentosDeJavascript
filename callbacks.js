const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
                        //metodo replace, reemplaza una parte especifica de un
                        //string asignandole otra diferente


function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, opts, function (data) {
            resolve(data)
        })
        .fail(() => {
            console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
        })
    })
}
    
var onError = id => {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]

    var promesas = ids.map(id => obtenerPersonaje(id))
    
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }

    // Promise
    // .all(promesas)
    // .then(personajes => console.log(personajes))
    // .catch(onError)
}

obtenerPersonajes()
//Promesas en paralelo


//De esta manera aseguramos el orden de peticion de los datos
// obtenerPersonaje(1)
//     .then(personaje => {
//         console.log(`El personaje 1 es ${personaje.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(personaje => {
//         console.log(`El personaje 2 es ${personaje.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(personaje => {
//         console.log(`El personaje 3 es ${personaje.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(personaje => {
//         console.log(`El personaje 4 es ${personaje.name}`)
//     })
//     .catch(onError)

//callback en serie