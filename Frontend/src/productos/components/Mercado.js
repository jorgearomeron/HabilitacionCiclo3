import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Mercado1 = ({ Delcampo }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <center>
          <h2>{Mercado.category}</h2>
        </center>
      </Card.Header>
      <Card.Img
        variant="top"
        src={Mercado.url}
        width={300}
        height={300}
        alt="300x300"
        rounded
      />
      <Card.Body>
        <Card.Title>{Mercado.title}</Card.Title>
        <Card.Text>{Mercado.description}</Card.Text>
        <Button variant="danger" size="sm">
          ${Mercado.price}
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Card.Body>
    </Card>
  );
};

export default Mercado1;

