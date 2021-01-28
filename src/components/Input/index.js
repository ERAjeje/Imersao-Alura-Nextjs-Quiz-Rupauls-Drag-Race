/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Input = styled.input`
    margin: 15px auto;
    padding: 15px 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.mainBg};
    border: 1px solid white;
    border-radius: 6px;

    &::-webkit-input-placeholder{
        color: ${({ theme }) => theme.colors.contrastText};
    }

    &:focus{
        outline: none;
        color: ${({ theme }) => theme.colors.contrastText};
    }
`;

export default Input;
