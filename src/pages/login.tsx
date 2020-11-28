import {
    Container,
    Main,
    Name,
    Logo,
    LoginBox,
    Title,
    ForgotPassword,
    LoginBoxForm,
    SignUpLink
} from '../styles/pages/Login/styles';

import Input from '../Components/Input';
import Button from '../Components/Button';
import Header from '../Components/Header';

const Login:React.FC = () =>{
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
            <SignUpLink>Novo por aqui, faça seu cadastro</SignUpLink>
        </Main>
    </Container>
    );
}

export default Login;