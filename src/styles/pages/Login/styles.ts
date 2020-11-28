import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #253A44 url('./assets/background1.jpg') no-repeat fixed;
    background-size: 100%;
`;

export const Name = styled.h1`
    font-size: 48px;
    color: #000;
`;

export const Logo = styled.h1`
    font-size: 72px;
    color: #fff;
`;

export const LoginBox = styled.div`
    background-color: #4661C2;
    margin: 15px;
    width: 616px;
    height: 416px;
    min-width: 500px;
    padding: 10px;
`;

export const LoginBoxForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 0.3em black;
    background-color: #E9E9E9;
    height: 100%;
`;

export const Title = styled.h2`
    font-size: 36px;
`;

export const ForgotPassword = styled.a`
    text-decoration: none;
    font-size: 18px;
`;

export const SignUpLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: #fff;
`;
