import { useCallback } from 'react';
import { useRouter } from 'next/router'; 

import Input from '../Components/Input';
import Button from '../Components/Button';
import Header from '../Components/Header';

import {
    Container,
    Logo,
    LoginBox,
    Title,
    ForgotPassword,
    LoginBoxForm,
    SignUpLink,
    SignUpDiv
} from '../styles/pages/Login/styles';

import {FiLogIn} from 'react-icons/fi';


const Login:React.FC = () => {
    const navigateToDashboard = useCallback(() => {
        const router = useRouter();

        router.push('/dashboard');
    },[]);
    return (
    <Container>
        <Header />
        <Logo>EVNTO</Logo>
        
        <LoginBox>
            <LoginBoxForm onSubmit={navigateToDashboard}>
                <Title>Faça seu Login </Title>
                <Input name="mail" placeholder="Email"/>
                <Input name="password" placeholder="Senha"/>
                <ForgotPassword href="http://localhost:3000/forgotpassword">Esqueceu sua senha ?</ForgotPassword>
                <Button type="submit"> Entrar</Button>
            </LoginBoxForm>
        </LoginBox>

        <SignUpLink href="http://localhost:3000/signup">
            <SignUpDiv>
                Novo por aqui, faça seu cadastro
                <FiLogIn size={24} color="#fff" />
            </SignUpDiv>
        </SignUpLink>

    </Container>
    );
}

export default Login;