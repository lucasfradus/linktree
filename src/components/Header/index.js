import React from 'react';
import styled from 'styled-components';

import { Title, Subtitle } from './styles';

export default function Header({ picture, title, subtitle }) {
  return (
    <Container>
      <img src={picture} className="img-logo" alt="logo" />
      <Title> {title} </Title>
      <Subtitle> {subtitle} </Subtitle>
    </Container>
  )
}

 const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
  justify-content: center;
  text-align: center;
  width: 100%;


  .img-logo{
      background-image: url( ${ ({ background }) => background});
      object-fit: contain; 
      height: 65px;
      margin: 0 auto;
      width: 390px;
      padding: 1rem;
  }
`;
