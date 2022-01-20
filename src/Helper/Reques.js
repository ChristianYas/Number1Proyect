const Reques = (options,typeofreques,id) =>{

    let endpoint = 'http://localhost:5000/productos'

    if(typeofreques === 'newUser') endpoint = 'http://localhost:5000/usuarios'

    if(typeofreques === 'validar') endpoint = 'http://localhost:5000/usuarios'

    if(typeofreques === 'venta') endpoint = 'http://localhost:5000/ventas'

    if(typeofreques === 'delete') endpoint = `http://localhost:5000/ventas/${id}`

    return fetch(endpoint,options)
        .then(res => res.ok ? res : Promise.reject(res))
        .catch(err => console.log(err))
}

export default Reques