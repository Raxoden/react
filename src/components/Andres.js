import React, { Component } from 'react';
import styled from 'styled-components'
import * as palette from './variables.js';

class Andres extends Component {
  render() {
    return (
      <styles.SoyAndres isActive={this.props.isActive}>
        <h1>{this.props.nombre}</h1>
      </styles.SoyAndres>
    );
  }
}

const styles = {};

styles.SoyAndres = styled.div`
  background: ${palette.SecondaryColor};
  border-radius: 3px;
  border: 2px solid ${palette.MainColor};
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  background: ${props => props.isActive ? "orange" : "white"};
`

export default Andres;
