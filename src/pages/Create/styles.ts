import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 400px;
    height: 600px;
    border: 1px solid ${colors.bluePrimary};
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 4px;
    padding: 12px;
    box-shadow: 5px 4px 19px 3px #949494;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderText = styled.p`
    color: ${colors.bluePrimary};
    font-weight: 700;
    font-size: 24px;
`;

export const FormContainer = styled.div`
    margin-top: 30px;
`;

export const CustomInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    margin-bottom: 20px;
    border: 1px solid #999;
    padding-left: 5px;
    font-size: 14px;
`;

export const ButtonContainer = styled.div`
    width: 300px;
    height: 60px;
    background-color: ${colors.yellowPrimary};
    margin: 0 auto;
    margin-top: 60px;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
`;

export const ButtonText = styled.p`
    color: ${colors.bluePrimary};
    font-weight: 800;
    font-size: 18px;
`;

