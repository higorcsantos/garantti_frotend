import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    padding: 0 20px;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 40px;
`

export const Header = styled.div`
    text-align: center;
`;

export const HeaderText = styled.p`
    color: ${colors.bluePrimary};
    font-weight: 700;
    font-size: 24px;
`;

export const IconContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: ${colors.yellowPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    cursor: pointer;
`;

export const Icon = styled.p`
    font-size: 50px;
    font-weight: 800;
    color: ${colors.bluePrimary};
`;