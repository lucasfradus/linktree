import React from 'react';
import { Container, Name } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Button({ icon, name, backgroundColor, link }) {
  return (
    <Container backgroundColor={backgroundColor} href={link} target='_blank'>
      <FontAwesomeIcon icon={icon} className="icon"/>
      <Name>{name}</Name>
    </Container>
  );
}
