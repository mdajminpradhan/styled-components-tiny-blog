import React from "react";
import { GlobalStyles } from "../components/Global";
import { Card, CardBody } from "../components/styles/Card.styled";
import { Container } from "../components/styles/Container.styled";
import { Image } from "../components/styles/Image.styled";

// importing assets
import ImageOne from "../assets/images/1.jpg";
import ImageTwo from "../assets/images/2.jpg";
import ImageThree from "../assets/images/3.jpg";
import { Header } from "../components/styles/Header";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header>
        <h1>Welcome to the Travel blog!!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem repellat nostrum velit dolorem minima hic doloribus
          optio fugit quibusdam accusamus! Modi alias expedita mollitia
        </p>
      </Header>
      <Container>
        <Card>
          <Image src={ImageOne?.src} alt="image" />
          <CardBody>
            <small>Turkey</small>
            <h1>10 Amazing place you can visit with you family</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit culpa vero
              provident illo fuga assumenda
            </p>
          </CardBody>
        </Card>
        <Card>
          <Image src={ImageTwo?.src} alt="image" />
          <CardBody>
            <small>Turkey</small>
            <h1>10 Amazing place you can visit with you family</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit culpa vero
              provident illo fuga assumenda
            </p>
          </CardBody>
        </Card>
        <Card>
          <Image src={ImageThree?.src} alt="image" />
          <CardBody>
            <small>Turkey</small>
            <h1>10 Amazing place you can visit with you family</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit culpa vero
              provident illo fuga assumenda
            </p>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default App;
