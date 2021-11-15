import Mercado1 from "./Mercado";
import { Container, Row, Col } from "react-bootstrap";

const TablaProductos = () => {
  const Delcampo = [
    {
        id : "Pp001",
        title: "Papa pastusa",
        description: "Papa por libra cultivada por campesinos de Nariño",
        price: 1000,
        category: "Tubérculo",
        url:"https://plazamercado.shop/wp-content/uploads/2020/08/Papa-pastusa.jpg", 
    },
    {
        id: "Yc002",
        title: "Yuca",
        description: "Yuca por libra cultivada por campesinos de Bolívar",
        price: 1500,
        category: "Tubérculo",
        url: "https://imagizer.imageshack.com/v2/355x452q90/r/922/3Aduv0.jpg",
    },
    {
        id: "Ac003",
        title: "Arracacha",
        description: "Arracacha por libra cultivada por campesinos de Boyacá",
        price: 900,
        category: "Tubérculo",
        url: "https://imagizer.imageshack.com/v2/354x452q90/r/923/j11U97.jpg",
    },
    {
        id: "Mz004",
        title: "Manzana Royal",
        description: "Manzana organica por unidad",
        price: 1500,
        category: "Frutas",
        url: "https://imagizer.imageshack.com/v2/354x452q90/r/924/dQw4EI.jpg",
    },
    {
        id: "Mv005",
        title: "Manzana verde",
        description: "Manzana organica por unidad",
        price: 1500,
        category: "Frutas",
        url: "https://imagizer.imageshack.com/v2/354x452q90/r/922/bmxP8j.jpg",
    },
    {
        id: "Uv006",
        title: "Uvas isabelinas",
        description: "Uvas isbelinas organicas por bandeja ",
        price: 2000,
        category: "Frutas",
        url: "https://imagizer.imageshack.com/v2/354x452q90/r/923/AFUdm3.jpg",
    },
    {
        id: "Lv007",
        title: "Leche de vaca",
        description: "leche de vaca por litro ordeñada por campesinos cundiboyacenses",
        price: 3000,
        category: "Lácteos",
        url: "https://imagizer.imageshack.com/v2/339x452q90/r/924/l2E2LC.jpg",
    },
    {
        id: "Lc008",
        title: "Leche de cabra",
        description: "leche de cabra por litro ordeñada por campesinos de cundinamarca",
        price: 3500,
        category: "Lácteos",
        url: "https://imagizer.imageshack.com/v2/339x452q90/r/922/xiTUbx.jpg",
    },
    {
        id: "Hg009",
        title: "Huevos de gallina",
        description: "Huevos de gallinas organicos bandeja por 30 unidades ",
        price: 16000,
        category: "Huevos",
        url: "https://imagizer.imageshack.com/v2/339x452q90/r/923/ROalUA.jpg",
    },
    {
        id: "Hc010",
        title: "Huevos de codorniz",
        description: "Huevos de codorniz organicos bandeja por 12",
        price: 7000,
        category: "Huevos",
        url: "https://imagizer.imageshack.com/v2/339x452q90/r/924/DRc1dm.jpg",
    },
    {
        id: "LhC011",
        title: "Lechuga crespa",
        description: "lechuga crespa organica",
        price: 2000,
        category: "Vegetales",
        url: "https://imagizer.imageshack.com/v2/339x452q90/r/922/ElFXSA.jpg",
    },
    {
        id: "Ep012",
        title: "Espinaca",
        description: "Espinaca organica",
        price: 2000,
        category: "Vegetales",
        url: "https://imagizer.imageshack.com/v2/339x452q90/r/924/MlGEvC.jpg",
    },
];

  return (
    <Container>
      <Row>
        {Delcampo.map((mercado) => (
          <Col xs={4}>
            <Mercado1 Mercado={mercado} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TablaProductos;
