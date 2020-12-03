import {Container, Logo} from '../../styles/Components/Header';

const Header: React.FC = ({children}) => {
    return(
        <Container>
            <Logo href="http://localhost:3000/login">EVNTO</Logo>
            {children}
        </Container>)
};

export default Header;