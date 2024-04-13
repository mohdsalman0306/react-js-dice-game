import styled from "styled-components";

export const Button = styled.button`
    min-width: 220px;
    padding: 10px 18px 10px 18px;
    border-radius: 5px;
    background: #000000;
    color: #ffffff;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover {
        background-color: #ffffff;
        color: #000000;
        border: 1px solid #000000;
        transition: 0.3s background ease-in;
        cursor: pointer;
    }
`; 

export const OutlineButton = styled(Button)`
    background-color: #ffffff;
    color: #000000 ;
    border: 1px solid #000000;
    &:hover {
        background-color: #000000  ;
        border: 1px solid #000000;
        color: #ffffff;
    } 
`; 