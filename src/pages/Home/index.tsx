import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { 
    Container, 
    Header, 
    HeaderText, 
    IconContainer,
    Icon, 
    CardContainer
} from './styles';

import {Link} from 'react-router-dom';
import Loading from '../../components/Loading';
import api from '../../services/api';

interface IUser{
  name: string;
  cpf: number;
  telefone: number;
  email: string;
  id: number;
}

const Home: React.FC = () => {
  const [loading,setLoading] = useState<boolean>(true);
  const [user,setUser] = useState<IUser[]>([]);

  const listUser = async () => {
    const response = await api.get('/users');
    const data = response.data
    setUser(data);
    setLoading(false)
  }

  useEffect(() => {
    listUser();
  }, []);

  return (
    <Container>
      {
      loading 
      ? 
      <Loading /> 
      :
      <>
      <Header>
            <HeaderText>Lista de Usuários</HeaderText>
        </Header>
        <CardContainer>
        {
          user.length > 0 
          ?
          user.map((result: IUser) => {
            return(
              <Card 
                key={result.id}
                cpf={result.cpf}
                name={result.name}
                email={result.email}
                telefone={result.telefone}/>
            )
          })
          :
          <></>
        }
        </CardContainer>
        <Link to='create'>
        <IconContainer>
            <Icon> + </Icon>
        </IconContainer>
        </Link>
        </>
      }
    </Container>

        
  )
}

export default Home