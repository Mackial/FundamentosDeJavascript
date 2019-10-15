const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
                        //metodo replace, reemplaza una parte especifica de un
                        //string asignandole otra diferente
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onResponse = function (luke) {
    console.log(`Hola yo soy, ${luke.name}`)
}

$.get(lukeUrl, opts, onResponse)