import {InputHTMLAttributes} from 'react';
import {Container, BlueDiv, InputDiv, InputElement} from '../../styles/Components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: string;
}

const Input: React.FC<InputProps> = ({name,icon,...rest}) => {
    return(
        <Container>
            <BlueDiv>
                
            </BlueDiv>
            <InputDiv>
                <InputElement {...rest}/>
            </InputDiv>
        </Container>
    );
};

export default Input;