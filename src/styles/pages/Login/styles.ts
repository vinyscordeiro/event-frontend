import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #253A44 url('./assets/background1.jpg') no-repeat fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.h1`
    margin-top: 92px;
    font-size: 72px;
    color: #fff;
    font-weight: 400;
`;

export const LoginBox = styled.div`
    background-color: #4661C2;
    margin-top: 64px;
    margin-bottom: 50px;
    width: 616px;
    height: 416px;
    min-width: 400px;
    padding: 8px;

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
    margin-top: 35px;
    font-size: 36px;
    font-weight: 400;
`;

export const ForgotPassword = styled.a`
    margin: 25px 0 25px;
    text-decoration: none;
    font-size: 18px;
    color: #000;

`;
export const SignUpDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
        margin-left: 8px;
    }
`;

export const SignUpLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: #fff;
`;
