import styled from "styled-components"
import Swal from "sweetalert2"
import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Product = ({producto}) =>{

    let {name,marca,descripcion,foto,precio} = producto
    let w = window

    function reacomodar(name){
        if(name === 'Escalera') return '-70px'

        if(name === 'cemento' || name === 'pinzas' || name === 'Martillo') return '-30px'

    }

    const Div = styled.div`
     width: 400px;
     height: 400px;
     margin: 20px;
     position: relative;
    `

    const Img = styled.img`
     position: absolute;
     top: ${reacomodar(name)};
     left; 0;
     width: 70%;
     margin-bottom: 40px;
    `

    const DivTetx = styled.div`
     width: 100%;
     position: absolute;
     bottom: 0;
     left: 0;
     text-transform: uppercase;
    `

    const Small = styled.small`
     font-family: 'Lato', sans-serif;
     font-weight: bold;
    `

    const P = styled.p`
     width: 50%;
     font-family: 'Lato', sans-serif;
     font-weight: 600;
    `

    const Price = styled.p`
     font-weight: bold;
    `

    const Button = styled.button`
     width: 35%;
     padding: 10px;
     height: 8%;
     border: none;
     transition: 1s ease;
     background-color: #28a745;
     border-radius: 10px;
     font-size: 20px;
     color: #fff;
     font-weight: 600;
     cursor: pointer;

     &:hover{
        background-color: #28a74550;
     }
    `

    const handlerClick = (e) =>{
        let usuario = window.localStorage.getItem('name')
        if(window.localStorage.getItem('login') === 'true'){
            w.localStorage.setItem('compra',name)
            w.localStorage.setItem('precio',precio)
            w.localStorage.setItem('marca', marca)

            let fecha = new Date
            let day = fecha.getDate()
            let month = fecha.getMonth() + 1
            let year = fecha.getFullYear()

            let date = {day,month,year}
            w.localStorage.setItem('date', JSON.stringify(date))

            w.location.pathname = '/compra'
        }
        else{
            Swal.fire({
                title: 'Compra invalida',
                text: 'Necesitamos que inicies sesion',
                icon: 'info',
                timer: 4000,
                showConfirmButton: false
            })

            setTimeout(() => {
                w.location.pathname = '/'
            }, 4300);
        }
    }

    return(
        <Div>
            <Img src={foto}/>
            <DivTetx>
                <Small>{marca}</Small>
                <P>{descripcion}</P>
                <Price>{precio}$</Price>
                <Button id={name} onClick={handlerClick} type="button">Comprar</Button>
            </DivTetx>
        </Div>
    )
}

export default Product
