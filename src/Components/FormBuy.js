import styled from "styled-components";
import shopping from "../Images/shopping.svg";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Reques from "../Helper/Reques";

const FormBuy = () => {
  const [articulo, setArticulo] = useState();
  const [fecha, setFecha] = useState();
  const [user, SetUser] = useState();
  const [descuento1, setDescuento] = useState('')

  useEffect(() => {
    let w = window;
    setArticulo(w.localStorage.getItem("compra"));

    let date = JSON.parse(w.localStorage.getItem("date"));
    setFecha(date);

    SetUser(w.localStorage.getItem("name"));

    setDescuento(w.localStorage.getItem('descuento'))

  }, []);

  const Div = styled.div`
    width: 400px;
    height: 470px;
    padding: 10px;
    margin: 150px 49em;
    position: relative;
    top: -50px;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #fff;
  `;

  const Form = styled.form`
    width: 90%;
    height: 90%;
    position: absolute;
    bottom: -65px;
    left: 1px;
  `;

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
  `;

  const Input = styled.input`
    padding: 10px;
    width: 100%;
    margin: 5px;
    border-bottom: 1px solid #000;
    outline: none;
  `;

  const Button = styled.button`
    width: 94%;
    height: 50px;
    margin: 15px;
    padding: 10px;
    background-color: #28a745;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #fff;

    &:hover {
      background-color: #28a74580;
    }
  `;

  const Logo = styled.h2`
    color: #fff;
    font-size: 29px;
    text-transform: uppercase;
  `;

  const Small = styled.small`
    color: #fff;
    position: relative;
    bottom: 20px;
    font-weight: 500;
  `;

  const Container_img = styled.img`
    position: absolute;
    top: 70px;
    width: 50em;
  `;

  const Bottom = styled.div`
    width: 100%;
    background-color: #000;
    height: 100px;
  `;

  const Under = styled.div`
    width: 109%;
    position: absolute;
    bottom: 25px;
    left: 4px;
    background-color: #000;
    height: 170px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;
    overflow: hidden;
  `;

  const CancelButton = styled.a`
    width: 90%;
    height: 30px;
    margin: 12px;
    padding: 10px;
    background-color: #d9534f;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #fff;
    display: block;
    text-decoration: none;

    &:hover {
      background-color: #d9534f90;
    }
  `;

  const handlerSubmit = (e) => {
    e.preventDefault();
    let validationName;
    let validation = 0;
    let array = [];
    let w = window

    for (let i = 0; i < e.target.length - 1; i++) {
      if (e["target"][i]["value"] === "") {
        validation++;
      }

      array.push([e["target"][i]["name"], e["target"][i]["value"]]);
    }

    array = Object.fromEntries(array);
    array.fecha = fecha;

    array.precio = parseInt(window.localStorage.getItem("precio"));
    array.precio = array.precio * array.cantidad;

    if (validation === 0) {
      if (array.cantidad > 0) {
        Reques({ method: "GET" }, "newUser")
              .then((res) => res.json())
              .then((res) => {
                validationName = res.find(
                  (usuario) => usuario["email"] === array.email
                );

                if (validationName) {

                  let descuento = (array.precio * parseInt(descuento1))/100
                  array.precio -= descuento

                  let iva = Math.round((array.precio * 16)/100)
                  console.log(iva);

                  array.precio += iva

                  Swal.fire({
                    title: "Que tal",
                    text: `Esto es lo que costaria ${array.precio} pesos, con el descuento y mas el iva`,
                    icon: "warning",
                    showCancelButton: true,
                    preConfirm: (confirm) => {
                      delete array.email;
                      Reques(
                        {
                          method: "POST",
                          headers: {
                            "Content-type": "application/json",
                          },
                          body: JSON.stringify(array),
                        },
                        "venta"
                      );
                      console.log("Listo");
    
                      Swal.fire({
                        title: 'Gracias por su compra',
                        text: 'Gustaria facturar?',
                        icon: 'info',
                        showCancelButton: true,
                        preConfirm: ()=>{
                          w.localStorage.setItem('name',array.razon)
                          w.localStorage.setItem('precio', array.precio)
                          window.location.pathname = '/facturar'
                        }
                      })
                    },
                  });
                } else {
                  Swal.fire({
                    title: 'Upsi',
                    text: 'Lo siento pero necesitamos que ingreses bien tu email',
                    icon: 'warning'
                  })
                }
              });
      } else {
        console.log("no puedes pedir menos de 0");
        Swal.fire({
          title: 'Upsi',
          text: 'Lo siento pero puedes pedir 0 productos de algo',
          icon: 'warning'
        })
      }
    } else {
      Swal.fire({
        title: 'Upsi',
        text: 'Lo siento pero necesitamos que llenes todos los campos',
        icon: 'warning'
      })
    }
  };

  return (
    <>
      <Container_img src={shopping} alt="" />
      <Div>
        <Top>
          <Logo>ferreteria navarro</Logo>
          <Small>Comprando un articulo</Small>
        </Top>
        <Form onSubmit={handlerSubmit}>
          <Input
            type={"text"}
            placeholder="Razon Social o Nombre"
            name="razon"
            value={user}
            autoComplete="off"
          />
          <Input
            type={"text"}
            placeholder="Correo"
            name="email"
            autoComplete="off"
          />
          <Input
            type={"text"}
            placeholder="Articulo"
            name="articulo"
            value={articulo}
            autoComplete="off"
          />
          <Input
            type={"text"}
            placeholder="RFC"
            name="rfc"
            autoComplete="off"
          />
          <Input
            type={"number"}
            placeholder="Cuanros productos quiere de este articulo"
            name="cantidad"
            autoComplete="off"
          />
          <Under>
            <Button type={"submit"}>Comprar</Button>
            <CancelButton href="/productos">Cancelar</CancelButton>
          </Under>
        </Form>
        <Bottom />
      </Div>
    </>
  );
};

export default FormBuy;
