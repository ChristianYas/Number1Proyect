import { useEffect } from "react"
import styled from "styled-components"
import store from '../Images/shoping.svg'
import Swal from "sweetalert2"
import Reques from "../Helper/Reques"

const Login = ()=>{

    useEffect(()=> window.scrollTo(0,0),[])

    const Div = styled.div`
     width: 400px;
     height: 470px;
     padding: 10px;
     margin: 150px 49em;
     position: relative;
     border-radius: 10px;
     background-color: #fff;
     border: 1px solid #fff;
    `

    const Form = styled.form`
     width: 90%;
     height: 90%;
     position: absolute;
     bottom: -65px;
     left: 1px;
    `

    const Top = styled.div`
     width: 100%;
     position: absolute;
     top: 0;
     right: 0;
     height: 100px;
     background-color: #000;
     border-top-left-radius: 10px;
     border-top-right-radius: 10px;
     text-align: center;
     z-index: 10
    `

    const Input = styled.input`
     padding: 10px;
     width: 100%;
     margin: 10px;
     border-bottom: 1px solid #000;
     outline: none;
    `

    const Button = styled.button`
     width: 94%;
     height: 40px;
     margin: 15px;
     padding: 10px;
     background-color: #FC5800;
     border: none;
     border-radius: 10px;
     cursor: pointer;
     font-size: 20px;
     color: #fff;
     position: relative;
     top: 14px;

     &:hover{
        background-color: #F78D54;
     }
    `

    const Logo = styled.h2`
     color: #fff;
     font-size: 29px;
     text-transform: uppercase;
    `

    const Small = styled.small`
     color: #fff;
     position: relative;
     bottom: 20px; 
     font-weight: 500;
    `

    const Container_img = styled.img`
     position: absolute;
     top: 70px;
     width: 50em;
    `

    const Span = styled.span`
     width: 110%;
     height: 100px;
     position: absolute;
     background-color: #000;
     left: 10px;
     border-bottom-left-radius: 10px;
     border-bottom-right-radius: 10px;
    `

    const Bloque = styled.div`
     position: absolute;
     top: -94px;
     left: 25px; 
     width: 99%;
     height: 90px;
     background-color: #000;
    `

    const handlerSubmit = (e) =>{
        e.preventDefault()

        let validation = 0
        let array = []
        for(let i=0; i<e.target.length - 1; i++){
            if(e['target'][i]['value'] === ''){
                validation++
            }

            array.push([e['target'][i]['name'],e['target'][i]['value']])
        }
        
        let descuento = Math.round(Math.random()*20)

        array = Object.fromEntries(array)
        array.descuento = descuento
        
      if(validation === 0){
        
        Reques({
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(array)
        },'newUser')

        Swal.fire({
            title: 'Listo',
            text: 'Se ha creado un nuevo usuario',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
        })

        setTimeout(() => {
            window.location.pathname = '/'
        }, 2500);
    
      }
      else{
        Swal.fire({
            title: 'Se te olvido algun dato',
            text: 'Necesitamos que llenes todos los campos',
            icon: 'error'
        })
      }
    }

    return(
      <>

       <Container_img src={store} alt="as"/>
         <Div>
            <Top>
                <Logo>
                    ferreteria navarro
                </Logo>
                <Small>Creando una cuenta</Small>
            </Top>
            <Form onSubmit={handlerSubmit}>
                <Bloque/>
                <Input type={'text'} placeholder="Nombre" name="nombre" autoComplete="off"/>
                <Input type={'text'} placeholder="apellido paterno" name="paterno" autoComplete="off"/>
                <Input type={'text'} placeholder="apellido materno" name="materno" autoComplete="off"/>
                <Input type={'text'} placeholder="Email" name="email" autoComplete="off"/>
                <Input type={'tel'} placeholder="Numero de telefono" name="telefono" autoComplete="off"/>
                <Span>
                <Button type={'submit'}>Enviar</Button>
                </Span>
            </Form>
        </Div>
      </>
    )
}

export default Login