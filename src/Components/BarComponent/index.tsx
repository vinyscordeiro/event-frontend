import {
  Container, 
  BCTitle
} from '@/styles/Components/BarComponent';

interface BarComponentProps{
  title?: string;
  host?: Boolean; 

}

const BarComponent: React.FC<BarComponentProps> = ({
  title, 
  host,
  children}) => {
  return (
    <Container>
      <BCTitle>{title}</BCTitle>
      {children}
    </Container>
  )
}

export default BarComponent;
