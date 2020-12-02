import Input from '../Components/Input';
import Header from '../Components/Header';

import {
    Container,
    Main,
    Name,
    SignUpDiv,
    SignUpCenteredDiv,
    Title,
    ButtonAdapted,
    SignUpForm,
    SignInLink,
    SignInDiv
} from '../styles/pages/SignUp/styles';

import {FiLogIn} from 'react-icons/fi';

const Login:React.FC = () => {
    return (
    <Container>
        <Header>
            <Name>EVNTO</Name>
        </Header>
        <Main>
            <SignUpDiv>
                <SignUpCenteredDiv>
                    <SignUpForm>
                        <Title>Cadastro</Title>

                        <Input name="name" placeholder="Nome"/>
                        <Input name="user" placeholder="Usuário"/>
                        <Input name="mail" placeholder="Email"/>
                        <Input name="birthday" placeholder="Data de nascimento"/>
                        <Input name="password" placeholder="Senha"/>
                        <Input name="password_confirmation" placeholder="Confirmar senha"/>

                        <ButtonAdapted type="submit">Seguinte</ButtonAdapted>

                    </SignUpForm>

                    <SignInLink href="http://localhost:3000/login">
                        <SignInDiv>
                            <FiLogIn size={24} color="#000" />
                            Voltar para Login
                        </SignInDiv>
                    </SignInLink>

                </SignUpCenteredDiv>
            </SignUpDiv>

        </Main>
    </Container>
    );
}

export default Login;