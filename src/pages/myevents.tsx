import Header from '../Components/Header';

import {
    Container,
    Title,
    EventsDiv,
    Subtitle,
    Event,
    EventContainer,
    EventTitle,
    EventText
} from '../styles/pages/MyEvents/styles';

const MyEvents:React.FC = () => {
    return (
        <Container>
            <Header />
            <Title>Meus Eventos</Title>

            <EventsDiv>
                <Subtitle>Acontecendo agora</Subtitle>
                <Event>
                    <EventContainer>
                        <EventTitle>Nome:</EventTitle>
                        <EventText>Vinicius Silva Cordeiro</EventText>
                    </EventContainer>
                    <EventContainer>
                        <EventTitle>Data:</EventTitle>
                        <EventText>20/12/2020</EventText>
                    </EventContainer>
                    <EventContainer>
                        <EventTitle>Local:</EventTitle>
                        <EventText>Fazenda Mucugê</EventText>
                    </EventContainer>
                    <EventContainer>
                        <EventTitle>Status:</EventTitle>
                        <EventText>Disponível</EventText>
                    </EventContainer>
                </Event>

                <Subtitle>Próximos eventos</Subtitle>
                <Event></Event>

                <Subtitle>Eventos</Subtitle>
                <Event></Event>
            </EventsDiv>          

        </Container>
    );
}

export default MyEvents;