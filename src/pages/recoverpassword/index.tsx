import Link from 'next/link';

import Input from '@/Components/Input';
import Header from '@/Components/Header';

import {
    Container,
    RecoverPasswordDiv,
    Title,
    Subtitle,
    ButtonAdapted,
    RecoverPasswordForm,
    SignInLink,
    SignInDiv
} from '@/styles/pages/RecoverPassword/styles';

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

                <Link href="/login" passHref>
                    <SignInLink>
                        <SignInDiv>
                            <FiLogIn size={24} color="#000" />
                            Voltar para Login
                        </SignInDiv>
                    </SignInLink>
                </Link>

            </RecoverPasswordForm>
        </RecoverPasswordDiv>
    </Container>
    );
}

export default RecoverPassword;