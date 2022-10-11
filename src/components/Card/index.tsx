import React from 'react'
import { Container,Label } from './styles';

interface CardProps{
  name: string;
  telefone: number;
  cpf: number;
  email: string;
}

const Card: React.FC<CardProps> = ({name, telefone, cpf, email}) => {
  return (
    <Container>
        <Label>Nome: {name}</Label>
        <Label>Email: {email}</Label>
        <Label>Telefone: {telefone}</Label>
        <Label>Cpf: {cpf}</Label>
    </Container>
  )
}

export default Card;