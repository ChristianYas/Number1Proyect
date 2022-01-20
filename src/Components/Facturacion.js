import { useEffect, useState } from "react";
import styled from "styled-components";

const Facturacion = () =>{
    const [fecha, setFecha] = useState('')
    const [folio, setFolio] = useState()
    const [producto, setProducto] = useState()
    const [precio, setPrecio] = useState()
    const [nombre, setNombre] = useState()
    const [marca, setMarca] = useState()

    useEffect(()=>{
        let w = window
        let numeroRandom,letraRandom
        let parte1='',parte2='',parte3='',parte4='',parte5='',createFolio
        let letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        for(let i=1; i<33; i++){
            numeroRandom = Math.round(Math.random()*10)
            letraRandom = Math.round(Math.random()*13)

            if(i < 5){
                parte1 = `${parte1}${numeroRandom}${letras[letraRandom]}`
            }

            if(i >= 8 && i <=9){
                parte2 = `${parte2}${numeroRandom}${letras[letraRandom]}`
            }

            if(i >= 12 && i <= 13){
                parte3 = `${parte3}${numeroRandom}${letras[letraRandom]}`
            }

            if(i >= 16 && i <= 17){
                parte4 = `${parte4}${numeroRandom}${letras[letraRandom]}`
            }

            if(i > 20 && i < 27){
                parte5 = `${parte5}${numeroRandom}${letras[letraRandom]}`
            }
        }

        createFolio = `${parte1}-${parte2}-${parte3}-${parte4}-${parte5}`
        setFolio(createFolio)

        let date = JSON.parse(w.localStorage.getItem('date'))

        setFecha(`${date.day}/${date.month}/${date.year}`)

        setProducto(w.localStorage.getItem('compra'))
        setNombre(w.localStorage.getItem('name'))
        setProducto(w.localStorage.getItem('compra'))
        setPrecio(w.localStorage.getItem('precio'))

    },[])

    const Div = styled.div`
     width: 50vw;
     height: 40vh;  
     border: 3px solid;
     position: relative;
     margin: 15% auto;
    `

    const H1 = styled.h1`
     font-size: 24px;
     font-weight: 600;
     text-transform: uppercase;
     width: 100%;
     text-align: center;
    `

    const Text = styled.div`
     width: 70%;
     height: 40%;
     position absolute;
     top: 20%;
     right: 10%;    
    `

    const Fecha = styled.p`

    `
    const Folio = styled.p`
    ` 

    const Button = styled.button`
     position: absolute;
     right: 10px;
     bottom: 20px;
     width: 15%;
     height: 10%;
     border-radius: 5px;
     cursor: pointer;
    `

    const handlerPrint= () =>{
        window.print()
    }
    
    return(
        <Div>
            <H1>ferreteria navarro</H1>
            <Text>
            <Folio>Nombre de la persona: {nombre}</Folio>
            <Folio>Nombre del producto: {producto}</Folio>
            <Folio>Marca: {marca}</Folio>
            <Folio>Precio del producto: {precio}$</Folio>
            <Fecha>Fecha de emicion: {fecha}</Fecha>
            <Folio>Folio fiscal: {folio}</Folio>
            </Text>
            <Button onClick={handlerPrint}>Imprimir</Button>
        </Div>
    )
}

export default Facturacion
