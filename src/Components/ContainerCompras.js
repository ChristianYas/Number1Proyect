import { useEffect, useState } from "react"
import styled from "styled-components"
import Reques from "../Helper/Reques"
import Compras from "./Compras"

const ContainerCompras = () =>{
    const [compras, setCompras] = useState()

    const Article = styled.article`
     width: 90vw;
     height: auto;
     display: flex;
     flex-direction: colum;
     justify-content: space-evenly;
     align-items: center;
     margin: 100px auto
    `

    useEffect(()=>{
        let usuario = window.localStorage.getItem('name')
        Reques({},'venta')
        .then(res => res.json())
        .then(data => {
            let compra = data.filter(venta => venta['razon'] === usuario)
            setCompras(compra)
        })
    },[])

    return(
        <Article>
            {
                compras ? compras.map(compra => <Compras el={compra}/>) : null
            }
        </Article>
    )
}

export default ContainerCompras