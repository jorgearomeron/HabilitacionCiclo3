import mercadoabierto from "./mercadoabierto.jpg";

const Home = ({ isLoggedIn, carrito, setCarrito }) => {
  return (
    <div align="center">
      <img src={mercadoabierto} width="850" height="850" alt="mercadoabierto"></img>
    </div>
  );
};

export default Home;
