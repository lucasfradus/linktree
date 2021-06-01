import styled from 'styled-components';
import {Variables} from '../../variables';
import { lighten } from 'polished';

export const Container = styled.a`
  background: ${ (props) => props.backgroundColor ? props.backgroundColor : Variables.opt1Color};
  border-radius: 3px;
  display: flex;
  flex-flow: row;
  align-items: center;
  margin: 10px auto;
  text-decoration: none;
  width: 100%;
  font-family: 'FSJoey', sans-serif;
  transition: ease 0.4s;


  &:hover {
    background: ${ (props) => lighten('0.1', props.backgroundColor)};
    cursor: pointer;
  }
}

.icon{
  height: 20px;
  font-size: 4rem;
  padding: 5px;
  color:white;
}
`;



export const Name = styled.p`
  color: ${Variables.textColor};
  padding: 20px 0;
`;
