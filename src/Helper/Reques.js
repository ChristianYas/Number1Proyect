const Reques = (options,typeofreques) =>{

    let endpoint = 'http://localhost:5000/productos'

    if(typeofreques === 'newUser') endpoint = 'http://localhost:5000/usuarios'

    if(typeofreques === 'validar') endpoint = 'http://localhost:5000/usuarios'

    return fetch(endpoint,options)
        .then(res => res.ok ? res : Promise.reject(res))
        .catch(err => console.log(err))
}

export default Reques