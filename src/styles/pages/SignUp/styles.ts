import styled from 'styled-components';
import Button from '@/Components/Button/index';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #253A44 url('./assets/background3.jpg') no-repeat fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
`;

export const ChangeView = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const View = styled.div`
    width: 132px;
    height: 3px;
    background-color: #4F7EF4;
`;

export const SignUpDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 616px;
    height: 100%;
    margin-left: auto;
`;

export const SignUpCenteredDiv = styled.div``;

export const SignUpForm = styled.form``;

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
        margin: 2px 24px 0 0;
    }
`;

export const SignInLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: #000;
`;
