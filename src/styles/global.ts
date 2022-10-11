import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
input, textarea, select {
    outline: 0;
    border: 0
}
`;
