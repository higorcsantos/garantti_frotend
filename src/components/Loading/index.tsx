import React from 'react'

import ClipLoader from 'react-spinners/ClipLoader';
import colors from '../../styles/colors';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
        <ClipLoader size={100} color={colors.bluePrimary}/>
    </Container>
  )
}

export default Loading;