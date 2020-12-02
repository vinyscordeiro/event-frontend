import styled from 'styled-components';
import Button from '@/Components/Button/index';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #253A44 url('./assets/background3.jpg') no-repeat fixed;
    background-size: cover;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-direction: row-reverse;
`;

export const Name = styled.h1`
    font-size: 48px;
    color: #000;
`;

export const SignUpDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 616px;
    height: 100%;
`;

export const SignUpCenteredDiv = styled.div`
`;

export const SignUpForm = styled.form`
`;

export const Title = styled.h2`
    font-size: 48px;
    font-weight: 400;
`;


export const ButtonAdapted = styled(Button)`
    margin: 35px 0;
`;

export const SignInDiv = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;

    > svg {
        margin: 2px 8px 0 0;
    }
`;

export const SignInLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: #000;
`;
