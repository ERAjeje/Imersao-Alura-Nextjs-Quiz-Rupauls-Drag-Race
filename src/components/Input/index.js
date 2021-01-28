/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Input = styled.input`
    margin: 15px auto;
    padding: 15px 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.mainBg};
    border: 1px solid white;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.contrastText};

    &::-webkit-input-placeholder{
        color: ${({ theme }) => theme.colors.contrastText};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        outline: none;
        color: white;
        background-color: ${({ theme }) => theme.colors.mainBg} !important;
    }

    &:focus{
        outline: none;
        color: white;//${({ theme }) => theme.colors.contrastText};
    }
`;

export default Input;
