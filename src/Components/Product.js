import styled from "styled-components"
import Swal from "sweetalert2"

const Product = ({producto}) =>{

    let {name,marca,descripcion,foto,precio} = producto

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

    const handlerClick = () =>{
        let usuario = window.localStorage.getItem('name')
        if(window.localStorage.getItem('login') === 'true'){
            // let date = new Date
            // let dt = new Date( "January 21, 1995 22:15:00" );
            // console.log(date.toLocaleDateString());
            // console.log(dt.getDay());
            // console.log(date.getMonth());
            // console.log(date.getFullYear());

            let compra = new Date("January 11, 20022 22:10:00")
            let mesCompra =  compra.getMonth()
            let anoComra = compra.getFullYear()

            let actual = new Date("February 11, 20022 22:10:00")
            let mesActual = actual.getMonth()
            let anoActual = actual.getFullYear()

            console.log(`mes de la compra${mesCompra} del ano ${anoComra}`);
            console.log(`mes actual${mesActual} ano ${anoActual}`);

            if(mesCompra <= mesActual && anoComra <= anoActual){
                console.log('Se permite hacer ');
            }

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
                window.location.pathname = '/'
            }, 4300);
        }
    }

    return(
        <Div>
            <Img src={foto}/>
            <DivTetx>
                <Small>{marca}</Small>
                <P>{descripcion}</P>
                <Price>{precio}</Price>
                <Button onClick={handlerClick} type="button">Comprar</Button>
            </DivTetx>
        </Div>
    )
}

export default Product