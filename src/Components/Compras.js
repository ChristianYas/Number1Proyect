import styled from "styled-components";
import basura from "../Images/eliminar.png";
import Reques from "../Helper/Reques";
import Swal from "sweetalert2";

const Compras = ({ el }) => {
  let { articulo, cantidad, precio, fecha, id } = el;

  const Producto = styled.div`
    width: 90%;
    height: 160px;
    margin: 10px;
    border: 1px solid;
    padding: 10px;
    background: #fc5800;
    color: #fff;
    border: 3px solid #000;
    border-radius: 20px;
    position: relative;
  `;

  const P = styled.p`
    font-size: 20px;
    font-weight: 600;
  `;

  const Img = styled.img`
    width: 10%;
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  `;

  const handlerDelte = () => {
    let day = fecha.day;
    let month = fecha.month;
    let year = fecha.year;

    let date = new Date();

    let dayA = date.getDate();
    let monthA = date.getMonth() + 1;
    let yearA = date.getFullYear();

    if (month === 12) {
      month = 1;
      year += 1;
    } else {
      month += 1;
    }

    if (day > 25) {
      if (day === 26) day = 1;
      if (day === 27) day = 2;
      if (day === 28) day = 3;
      if (day === 26) day = 4;
      if (day === 30) day = 5;
    } else {
      day += 5;
    }

    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;

    if (dayA < 10) dayA = `0${dayA}`;
    if (monthA < 10) monthA = `0${monthA}`;

    let fechaLimite = `${year}-${month}-${day}`;
    let fechaActual = `${yearA}-${monthA}-${dayA}`;

    if (fechaLimite < fechaActual) {
      Swal.fire({
        title: "Lo sentimos",
        text: "Ya a pasado mas de un mes, no podemos cancelar la compra",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Espera",
        text: "Seguro de que quieres cancelar la peticion",
        icon: "info",
        showCancelButton: true,
        preConfirm: () => {
          Reques({ method: "DELETE" }, "delete", id);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
      });
    }
  };

  return (
    <Producto>
      <P>Nombre del articulo: {articulo}</P>
      <P>La cantidad comprada: {cantidad}</P>
      <P>Precio: {precio}$</P>
      <Img src={basura} alt="" onClick={handlerDelte} />
    </Producto>
  );
};

export default Compras;
