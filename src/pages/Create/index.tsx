import React, { useCallback, useState } from 'react'
import api from '../../services/api';
import { ButtonContainer, ButtonText, Container, CustomInput, FormContainer, Header, HeaderText } from './styles';

const Create:React.FC = () => {
  const [name, setName] = useState<string>();
  const [cpf,setCpf] = useState<number>();
  const [email,setEmail] = useState<string>();
  const [telefone, setTelefone] = useState<number>();

  const handleSubmit = useCallback(() => {
    const data = {
      name,
      cpf,
      telefone,
      email
    }
    console.log(cpf)
    if(name === undefined || name === ''){
      alert('Todos os campos devem estar preenchidos');
      return
    }
    if(cpf === undefined || Number.isInteger(cpf) === false){
      alert('Todos os campos devem estar preenchidos');
      return
    }
    if(telefone === undefined || Number.isInteger(telefone) === false){
      alert('Todos os campos devem estar preenchidos');
      return;
    }
    if(email === undefined || email === ''){
      alert('Todos os campos devem estar preenchidos');
      return
    }
    try{
      api.post('/users', data);
      alert('Usuário Cadastrado com sucesso')
    }catch(error){
      console.error(error);
    }
  }, [name, cpf, email, telefone]);

  return (
    <Container>
      <Header>
        <HeaderText>Criar Usuário</HeaderText>
      </Header>
      <FormContainer>
          <CustomInput 
          type="text" 
          placeholder='Nome'
          onChange={(e) => setName(e.target.value)}
          />
          <CustomInput 
          type="number" 
          placeholder="Cpf"
          onChange={(e) => setCpf(parseInt(e.target.value))}/>
          <CustomInput 
          type="text" 
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}/>
          <CustomInput 
          type="number" 
          placeholder="Telefone"
          onChange={(e) => setTelefone(parseInt(e.target.value))}/>
        </FormContainer>
        <ButtonContainer onClick={() => handleSubmit()}>
          <ButtonText>Cadastrar</ButtonText>
        </ButtonContainer>
    </Container>
  )
}

export default Create;