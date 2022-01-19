import styled from "styled-components"
import store from '../Images/store.jpeg'
import { NavLink } from "react-router-dom"
import Reques from "../Helper/Reques"
import Swal from "sweetalert2"
import { useEffect } from "react"

const Home = () =>{
    useEffect(()=>{
        window.localStorage.setItem('login', 'false')
        window.localStorage.setItem('name', 'no')
    },[])

    const Div = styled.div`
     width: 80vw;
     height: 80vh;
     position: relative;
     top: 5px;
     left: 135px;
     overflow: hidden;
    `

    const Capa = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-color: #00000070;
     z-index: 10;
    `
 
    const Img = styled.img`
     width: 100%;
     height: 100%
     position: absolute;
    `

    const Text = styled.div`
     width: 98%;
     height: 95%;
     position: absolute;
     top: 10px;
     left: 6px;
     z-index: 20;
     color: #fff;
    `

    const Titulo = styled.h1`
     font-family: 'Inter', sans-serif;
     text-transform: uppercase;
     position: relative;
     top: -22px;
     left: -5px;
     width: 100vw;
     height: 70px;
     background-color: #B21313;
     padding: 10px;
     text-align: center;
     color: #fff;
    `

    const About = styled.p`
     width: 70%;
     color: #fff;
     font-family: 'Inter', sans-serif;
     font-weight: 500;
     font-size: 21px;
     position: relative;
     top: 30px;
     left: 15%
    `

    const Form = styled.form`
     position: absolute;
     width: 30%;
     height: 40%;
     left: 35%;
     bottom: 13%;
     z-index: 20;
     overflow: hidden;
     padding: 5px;
    `

    const Input = styled.input`
     width: 100%;
     padding: 10px;
     outline: none;
     border: none;
     background-color: #00000099;
     margin: 10px;
     color: #fff;
     background-color: #FC5800;
     
     &::placeholder{
        color: #fff;
     }
    `

    const Buton = styled.button`
     width: 95%;
     height: 40px;
     margin: 15px;
     padding: 10px;
     border: none;
     border-radius: 10px;
     cursor: pointer;

     &:hover{
        background-color: #F78D54;
     }
    `

    const ContainerNav = styled.p`
     position: relative;
     left: 36%
    `

    const handlerSubmit = (e) =>{
        e.preventDefault()
        let validationName
        let validationValue

        let nombre = e['target'][0]['value']
        let value =  e['target'][1]['value']

        Reques({method:'GET'},'validar')
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(res =>{
            validationName = res.find(usuario => usuario['nombre'] === nombre)
            validationValue = res.find(usuario => usuario['nombre'] === value)

            if(validationName || validationValue){
                window.localStorage.setItem('name',nombre)
                window.localStorage.setItem('login', 'true')
                Swal.fire({
                    title: 'Que tal',
                    text: `Bienvenido ${nombre}`,
                    timer: 3000,
                    icon: 'success',
                    showConfirmButton: false
                })

                setTimeout(() => {
                    window.location.pathname = '/productos'
                }, 3100);
            }
            else{
                Swal.fire({
                    title: 'Lo sentimos pero no existe ese usuario',
                    text: `Te invitamos a crear una cuenta`,
                    icon: 'error'
                })
            }

        })
        .catch(err => console.log(err))

    }

    return(
        <>
        <Titulo>
            Bienvenido a la tienda navarro
        </Titulo>
         <Div>
            <Capa/>
            <Img src={store} alt=""/>
            <Text>
                <About>
                    En nuestra ferreteria nos respaldan mas de
                    50 anos de experiencia en el mercado, contamos
                    con una gran cantidad de productos de las mas 
                    alta calidad, y lo mejor de todo que ahora podras
                    hacer tus pedidos a domicilio, sin la necesidad de
                    salir de casa.
                    <br/>
                    <br/>
                    Si eres tan amable de registrarte para poder hacer tus 
                    compras y si no tienes una cuenta por favor crea una, 
                    para que puedas ver nuetros productos.
                </About>
            </Text>
            <Form onSubmit={handlerSubmit}>
                <Input type={'text'} placeholder="Nombre" name="nombre" autoComplete="off"/>
                <Input type={'text'} placeholder="Email" name="email" autoComplete="off"/>
                <Buton type="submit">Ingresar</Buton>
                <ContainerNav>
                <NavLink style={{textDecoration: 'none', color: '#fff'}} to={'/crear-cuenta'}>Crear Cuenta</NavLink>
                </ContainerNav>
            </Form>
        </Div>
        </>
    )
}

export default Home