import Link from 'next/link';
import {Container, Logo} from '../../styles/Components/Header';

const Header: React.FC = ({children}) => {
    return(
        <Container>
            <Link href="/" passHref>
                <Logo>EVNTO</Logo>
            </Link>
            {children}
        </Container>)
};

export default Header;