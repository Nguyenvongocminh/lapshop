import React from "react";
import "./home.scss";
import Navbar from "../../componets/navbar/navbar";
import { Card, Icon, Button } from "semantic-ui-react";
import icon from "../../img/maytinh.png";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>home của tôi</h1>
      <div className="cha">
      <div className="laptop">
        <Card>
          <div className="icon">
            <img src={icon} alt="" />
          </div>
          <Card.Content>
            <Card.Header>LAPTOP</Card.Header>
            <Card.Meta>
              <span className="date">Hãng:MSI</span>
            </Card.Meta>
            <Card.Description>Máy tính này thuộc dòng gaming</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              Giá : 25.000.000vnđ
            </a>
          </Card.Content>
          <Button color="green">
          <Icon name="eye" />
            <Icon name="" /> xem chi tiết sản phẩm
          </Button>
        </Card>
      </div>
      <div className="laptop1">
        <Card>
          <div className="icon">
            <img src={icon} alt="" />
          </div>
          <Card.Content>
            <Card.Header>LAPTOP1</Card.Header>
            <Card.Meta>
              <span className="date">Hãng :Leonovo</span>
            </Card.Meta>
            <Card.Description>Máy tính này thuộc dòng gaming</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              Giá : 28.000.000vnđ
            </a>
          </Card.Content>
          <Button color="green">
          <Icon name="eye" />
            <Icon name="" /> xem chi tiết sản phẩm
          </Button>
        </Card>
      </div>
      <div className="laptop2">
        <Card>
          <div className="icon">
            <img src={icon} alt="" />
          </div>
          <Card.Content>
            <Card.Header>LAPTOP2</Card.Header>
            <Card.Meta>
              <span className="date">Hãng:Asus</span>
            </Card.Meta>
            <Card.Description>Máy tính này thuộc dòng gaming</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              Giá : 21.000.000vnđ
            </a>
          </Card.Content>
          <Button color="green">
          <Icon name="eye" />
            <Icon name="" /> xem chi tiết sản phẩm
          </Button>
        </Card>
      </div>
      <div className="laptop3">
        <Card>
          <div className="icon">
            <img src={icon} alt="" />
          </div>
          <Card.Content>
            <Card.Header>LAPTOP3</Card.Header>
            <Card.Meta>
              <span className="date">Hãng: Apple</span>
            </Card.Meta>
            <Card.Description>Máy tính này thuộc dòng gaming</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              Giá : 22.000.000vnđ
            </a>
          </Card.Content>
          <Button color="green">
          <Icon name="eye" />
            <Icon name="" /> xem chi tiết sản phẩm
          </Button>
        </Card>
      </div>
    </div>
    </div>
    
  );
};

export default Home;
