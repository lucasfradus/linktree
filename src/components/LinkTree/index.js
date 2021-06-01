import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import {Data} from '../../variables';
import Header from '../Header';
import Logo from '../../images/logo.png';


export default function LinkTree() {
  return (
    <Container>
      <Header picture={Logo} title='Descarga la App!' subtitle='Encontranos en nuestras redes' />

      
      {Data && Data.map((x) => 
          <Button key={x.id} link={x.link} icon={x.icon} name={x.name} backgroundColor={x.backgroundColor} />
      )}



    </Container>

  )
}