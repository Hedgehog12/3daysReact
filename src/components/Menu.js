import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
  color: rgb(141, 141, 141);
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
`
const WorkTime = styled.div`
  color: rgb(42, 42, 42);
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;

  span {
    display: block;
    color: rgb(70, 70, 70)
    font-family: "Roboto Bold";
    font-size: 21px;
    font-weight: 700;
  }
`
const Calls = styled.div`
  color: rgb(42, 42, 42);
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;

  span {
    display: block;
    color: rgb(70, 70, 70)
    font-family: "Roboto Bold";
    font-size: 21px;
    font-weight: 700;
  }
`
const CallButton = styled.button`
  width: 173px;
  height: 45px;
  background-color: rgb(63,199,219);
  border:none;
  outline: none;
  border-radius: 30px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
`

class Address extends React.Component {
  render() {
    return (
      <span> {this.props.addr}</span>
    )
  }
}
class TellNamber extends React.Component {
  render() {
    return (
      <span> {this.props.tel}</span>
    )
  }
}

class Menu extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={3}>
          <Repair>Ремонт айфонов в сервисном центре и на выезде</Repair>
        </Col>
        <Col lg={3} lgOffset={1}>
          <WorkTime>Пн-пт с 10 до 20, сб,вс с 11 до 18
            <Address addr="Ленинская, 301"/>
          </WorkTime>
        </Col>
        <Col lg={3}>
          <Calls>Звонки принимаются 24 часа
            <TellNamber tel="8 (846) 922 55 44" />
          </Calls>
        </Col>
        <Col lg={2}>
          <CallButton>Заказать звонок!</CallButton>
        </Col>
      </Row>
    )
  }
}

export default Menu