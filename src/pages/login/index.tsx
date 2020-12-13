import { useCallback } from 'react';
import { useRouter } from 'next/router'; 
import Link from 'next/link';

import Input from '@/Components/Input';
import Button from '@/Components/Button';
import Header from '@/Components/Header'; 

import {
    Container,
    Logo,
    LoginBox,
    Title,
    ForgotPassword,
    LoginBoxForm,
    SignUpLink,
    SignUpDiv
} from '@/styles/pages/Login/styles';

import {FiLogIn} from 'react-icons/fi';


const Login:React.FC = () => {
    const navigateToDashboard = useCallback((e) => {
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
                <Link href="/forgotpassword" passHref>
                    <ForgotPassword>Esqueceu sua senha ?</ForgotPassword>
                </Link>
                <Button type="submit"> Entrar</Button>
            </LoginBoxForm>
        </LoginBox>

        <Link href="/signup" passHref>
            <SignUpLink >
                <SignUpDiv>
                    Novo por aqui, faça seu cadastro
                    <FiLogIn size={24} color="#fff" />
                </SignUpDiv>
            </SignUpLink>
        </Link>

    </Container>
    );
}

export default Login;