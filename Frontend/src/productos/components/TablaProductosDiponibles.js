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
        url: "https://dam.cocinafacil.com.mx/wp-content/uploads/2020/07/yuca.jpg",
    },
    {
        id: "Ac003",
        title: "Arracacha",
        description: "Arracacha por libra cultivada por campesinos de Boyacá",
        price: 900,
        category: "Tubérculo",
        url: "https://www.jardineriaon.com/wp-content/uploads/2020/05/cultivo-de-la-arracacha.jpg",
    },
    {
        id: "Mz004",
        title: "Manzana Royal",
        description: "Manzana organica por unidad",
        price: 1500,
        category: "Frutas",
        url: "https://fruverlagranja.com/tienda/envigado/wp-content/uploads/sites/3/2020/05/manzana-royal.jpg",
    },
    {
        id: "Mv005",
        title: "Manzana verde",
        description: "Manzana organica por unidad",
        price: 1500,
        category: "Frutas",
        url: "https://vaquitaexpress.com.co/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/1/216.jpg",
    },
    {
        id: "Uv006",
        title: "Uvas isabelinas",
        description: "Uvas isbelinas organicas por bandeja ",
        price: 2000,
        category: "Frutas",
        url: "https://fruverianda.com/wp-content/uploads/2020/05/UVA-ISABELLA.jpg",
    },
    {
        id: "Lv007",
        title: "Leche de vaca",
        description: "leche de vaca por litro ordeñada por campesinos cundiboyacenses",
        price: 3000,
        category: "Lácteos",
        url: "http://c.files.bbci.co.uk/B4B5/production/_110216264_gettyimages-1089375390.jpg",
    },
    {
        id: "Lc008",
        title: "Leche de cabra",
        description: "leche de cabra por litro ordeñada por campesinos de cundinamarca",
        price: 3500,
        category: "Lácteos",
        url: "https://zoovetesmipasion.com/wp-content/uploads/2018/05/leche-de-cabra-2.jpg",
    },
    {
        id: "Hg009",
        title: "Huevos de gallina",
        description: "Huevos de gallinas organicos bandeja por 30 unidades ",
        price: 16000,
        category: "Huevos",
        url: "https://certifiedhumanelatino.org/wp-content/uploads/2019/07/gallinas-feliz-chile.jpg",
    },
    {
        id: "Hc010",
        title: "Huevos de codorniz",
        description: "Huevos de codorniz organicos bandeja por 12",
        price: 7000,
        category: "Huevos",
        url: "https://certifiedhumanelatino.org/wp-content/uploads/2019/07/gallinas-feliz-chile.jpg",
    },
    {
        id: "LhC011",
        title: "Lechuga crespa",
        description: "lechuga crespa organica",
        price: 2000,
        category: "Vegetales",
        url: "https://comeencasamedellin.com/wp-content/uploads/2020/12/lechuga-don-jesus.jpg",
    },
    {
        id: "Ep012",
        title: "Espinaca",
        description: "Espinaca organica",
        price: 2000,
        category: "Vegetales",
        url: "https://i.blogs.es/5ee30a/istock-522189977/450_1000.jpg",
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
