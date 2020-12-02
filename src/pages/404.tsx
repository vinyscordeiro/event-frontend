import Input from '../Components/Input';
import Button from '../Components/Button';
import Header from '../Components/Header';

import {
    Container,
    Main,
    Name,
    Warning,
    Subtitle
} from '../styles/pages/404/styles';

import {FiLogIn} from 'react-icons/fi';

const Login:React.FC = () => {
    return (
    <Container>
        <Header>
            <Name>EVNTO</Name>
        </Header>
        <Main>
            <Warning>Erro 404</Warning>
            <Subtitle> Parece que não há nenhuma página por cá </Subtitle>
        </Main>
    </Container>
    );
}

export default Login;