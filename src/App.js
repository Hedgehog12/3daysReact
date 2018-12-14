import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Coll from 'react-bootstrap/lib/Coll';
import styled from 'styled-components';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Julian" surname="Vlasiichuk" link="http://facebook.com" />
        <SayFullName name="Lena" surname="Tynkova" link="http://facebook.com" />
        <SayFullName name="Danik" surname="Artementko" link="http://facebook.com" />
    </div>
    );
  }
}


function SayFullName(props) {
  return(
    <div>
      <h1> My First Name {props.name}, and Last Name - {props.surname}</h1>
      <a href={props.link}> Link for my Profile </a> 
    </div>
  )
}


export default App;
