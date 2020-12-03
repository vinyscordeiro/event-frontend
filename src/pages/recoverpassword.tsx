import Input from '../Components/Input';
import Header from '../Components/Header';

import {
    Container,
    RecoverPasswordDiv,
    Title,
    Subtitle,
    ButtonAdapted,
    RecoverPasswordForm,
    SignInLink,
    SignInDiv
} from '../styles/pages/RecoverPassword/styles';

import {FiLogIn} from 'react-icons/fi';

const RecoverPassword:React.FC = () => {
    return (
    <Container>
        <Header/>
        <RecoverPasswordDiv>
            <RecoverPasswordForm>
                <Title>Recuperar sua senha ?</Title>
                <Subtitle>Pode agora colocar sua nova senha</Subtitle>

                <Input name="password" placeholder="Nova senha"/>
                <Input name="password_confirmation" placeholder="Confirmar nova senha senha"/>

                <ButtonAdapted type="submit">Alterar Senha</ButtonAdapted>

                <SignInLink href="http://localhost:3000/login">
                    <SignInDiv>
                        <FiLogIn size={24} color="#000" />
                        Voltar para Login
                    </SignInDiv>
                </SignInLink>

            </RecoverPasswordForm>
        </RecoverPasswordDiv>
    </Container>
    );
}

export default RecoverPassword;