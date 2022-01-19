import { useEffect, useState } from "react"
import styled from "styled-components"

const Nav = () =>{
    const [name, setName] = useState('')

    useEffect(()=>{
        setName(window.localStorage.getItem('name'))
    },[])

    const Header =  styled.header`
     width: 100vw;
     height: 100px;
     background: #FC5800;
     position: fixed;
     top: 0;
     left: -7px;
     z-index: 40;
    `

    const H3 = styled.a`
     position: absolute;
     top: 17px;
     right: 60px;
     color: #fff;
     text-transform: uppercase;
     border: 2px solid #000;
     padding: 15px;
     border-radius: 10px;
     text-decoration: none;
     font-size: 20px
    `

    const H1 = styled.h1`
     position: absolute;
     top: 10px;
     left: 30px;
     text-transform: uppercase;
     color: #fff;
    `

    return(
        <Header>
            <H1>
                Ferreteria Navarro
            </H1>
            <H3 href="/">
                {
                    name === 'no' ? 'Inicar Sesion' : name
                }
            </H3>
        </Header>
    )
}

export default Nav