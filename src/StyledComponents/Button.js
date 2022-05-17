import styled from 'styled-components';
import { buttons } from './Paletas';

const Button = styled.button`
    border: none;
    padding: 4px 16px;
    background-color: ${buttons.btn1};
    border-radius: 32px;
    margin: 8px;
`;

export default Button;
