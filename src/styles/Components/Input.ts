import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 48px;
    width: 280px;
    box-shadow: 0 0 0.2em grey;
    margin-top: 20px;
`;

export const BlueDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4661C2;
    width: 60px;
    height: 100%;
`;

export const InputElement = styled.input`
    margin: 0 15px;
    width: 220px;
    height: 100%;
    outline: 0;
    border: 0;

    &::placeholder{
        color: #635A5A;
        font-size: 14px;
    }
`;