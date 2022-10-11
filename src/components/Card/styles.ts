import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    padding: 12px 8px;
    border: 1px solid ${colors.bluePrimary};
    border-radius: 4px;
    width: 400px;
    margin-bottom: 10px;
    justify-content: space-evenly;
    box-shadow: 5px 4px 19px 3px #949494
`;

export const Label = styled.div`
    margin-bottom: 4px;
    color: ${colors.bluePrimary};
    font-size: 16px;
    font-weight: 700;
`;

