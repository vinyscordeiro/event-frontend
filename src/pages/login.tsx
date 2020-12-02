import Input from '../Components/Input';
import Button from '../Components/Button';
import Header from '../Components/Header';

import {
    Container,
    Main,
    Name,
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
    return (
    <Container>
        <Header>
            <Name>EVNTO</Name>
        </Header>
        <Main>
            <Logo>EVNTO</Logo>
            <LoginBox>
                <LoginBoxForm>
                    <Title>Faça seu Login </Title>
                    <Input name="mail" placeholder="Email"/>
                    <Input name="password" placeholder="Senha"/>
                    <ForgotPassword href="https://www.figma.com">Esqueceu sua senha</ForgotPassword>
                    <Button type="submit">Entrar</Button>
                </LoginBoxForm>
            </LoginBox>

            <SignUpLink href="http://localhost:3000/signup">
                <SignUpDiv>
                    Novo por aqui, faça seu cadastro
                    <FiLogIn size={24} color="#fff" />
                </SignUpDiv>
            </SignUpLink>
            
        </Main>
    </Container>
    );
}

export default Login;