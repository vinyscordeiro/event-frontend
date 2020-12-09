import {InputHTMLAttributes} from 'react';
import {Container, Placeholder, InputElement} from '../../styles/Components/TextField';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    title: string;
}

const Input: React.FC<InputProps> = ({name,title, ...rest}) => {
    return(
        <Container>
            <Placeholder>{title}</Placeholder>
            <InputElement {...rest}/>
        </Container>
    );
};

export default Input;