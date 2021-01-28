/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Button = styled.button`
    display: flexbox;
    margin: 15px auto;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.mainBg};
    color: white;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    font-size: medium;
    
    &:enabled {
        &:hover {
            background-color: ${({ theme }) => theme.colors.primary};
            cursor: pointer;
        }
    }
`;

export default Button;
