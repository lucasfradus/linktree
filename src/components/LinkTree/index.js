import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import variables from '../../variables';
import Header from '../Header';
import Logo from '../../images/logo.png';

import facebookLogo from '../../images/facebook.svg';

import linkedinLogo from '../../images/linkedin-in.svg';

import twitterLogo  from '../../images/twitter.svg' ;
import web  from '../../images/globo.svg' ;

import instagramLogo from '../../images/instagram.svg';

import apple from '../../images/apple.png';

import android from '../../images/android.png';


export default function LinkTree() {
  return (
    <Container>
      <Header picture={Logo} title='Descarga la App!' subtitle='Encontranos en nuestras redes' />
      <Button link='https://apps.apple.com/ar/app/vinimay/id1506565366' icon={apple} name='Descargar para IOs' backgroundColor={variables.apple} />
      <Button link='https://play.google.com/store/apps/details?id=com.vinimay.app' icon={android} name='Descargar para Android' backgroundColor={variables.android} />
      <Button link='https://www.vinimayapp.com/' icon={web} name='Visita nuestro sitio Web' backgroundColor={variables.web} />

      <Button link='https://www.facebook.com/vinimayapp/' icon={facebookLogo} name='Facebook' backgroundColor={variables.facebookColor} />
      <Button link='https://www.instagram.com/vinimayapp_es' icon={instagramLogo} name='Instagram' backgroundColor={variables.instagramColor} />
      <Button link='https://www.linkedin.com/company/vinimay-app/' icon={linkedinLogo} name='LinkedIn' backgroundColor={variables.linkedinColor} />
      <Button link='https://twitter.com/appvinimay' icon={twitterLogo} name='Twitter' backgroundColor={variables.twitterColor} />
    </Container>

  )
}