import { useEffect, useState } from "react"
import Reques from "../Helper/Reques"
import styled from "styled-components"
import Product from "./Product"
import Nav from "./Nav"

const ContainerProducts = ({name}) =>{
    const [products, setProducts] = useState('')

    console.log(name);

    useEffect(()=>{
        Reques()
        .then(data => data.ok ? data.json() : Promise.reject(data))
        .then(data => setProducts(data))
        .catch(err => console.log(err))
    },[])

    const Article = styled.article`
     width: 99vw;
     height: auto;
     display: flex;
     flex-flow: row wrap;
     alig-items: center;
     justify-content: space-evenly;
     position: relative;
     top: 10em;
     left: 40px;
     padding: 5px;
    `
    
    return(
        <Article>
            <Nav/>
            {
                products 
                ?products.map(producto => <Product producto={producto}/>) 
                : null
            }
        </Article>
    )
}

export default ContainerProducts