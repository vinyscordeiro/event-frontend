import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #253A44 url('./assets/background2.jpg') center no-repeat fixed;
    background-size: cover;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.h1`
    font-size: 48px;
    color: #000;
`;

export const Warning = styled.h1`
    margin-top: 94px;
    font-size: 72px;
    font-weight: 400;
    color: #fff;
`;

export const Subtitle = styled.h2`
    margin-top: 80px;
    font-size: 32px;
    color: #000;
    font-weight: 400;
    background-color: #fff;
    padding: 15px;
`;