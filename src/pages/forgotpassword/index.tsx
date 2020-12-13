import Link from 'next/link';

import Input from '@/Components/Input';
import Header from '@/Components/Header';

import {
    Container,
    ForgotPasswordDiv,
    Title,
    Subtitle,
    ButtonAdapted,
    ForgotPasswordForm,
    SignInLink,
    SignInDiv
} from '@/styles/pages/ForgotPassword/styles';

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
                
                <Link href="/login" passHref>
                    <SignInLink>
                        <SignInDiv>
                            <FiLogIn size={24} color="#000" />
                            Voltar para Login
                        </SignInDiv>
                    </SignInLink>
                </Link>

            </ForgotPasswordForm>
        </ForgotPasswordDiv>
    </Container>
    );
}

export default ForgotPassword;