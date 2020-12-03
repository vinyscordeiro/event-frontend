import Input from '../Components/Input';
import Header from '../Components/Header';

import {
    Container,
    ForgotPasswordDiv,
    Title,
    Subtitle,
    ButtonAdapted,
    ForgotPasswordForm,
    SignInLink,
    SignInDiv
} from '../styles/pages/ForgotPassword/styles';

import {FiLogIn} from 'react-icons/fi';

const ForgotPassword:React.FC = () => {
    return (
    <Container>
        <Header/>
        <ForgotPasswordDiv>
            <ForgotPasswordForm>
                <Title>Esqueceu sua senha ?</Title>
                <Subtitle>Não é problema, podemos recuperar com seu email</Subtitle>

                <Input name="mail" placeholder="Email"/>

                <ButtonAdapted type="submit">Recuperar Senha</ButtonAdapted>

                <SignInLink href="http://localhost:3000/login">
                    <SignInDiv>
                        <FiLogIn size={24} color="#000" />
                        Voltar para Login
                    </SignInDiv>
                </SignInLink>

            </ForgotPasswordForm>
        </ForgotPasswordDiv>
    </Container>
    );
}

export default ForgotPassword;