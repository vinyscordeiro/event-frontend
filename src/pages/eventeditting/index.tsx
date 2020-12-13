import {
    Container,
    EventDiv,
    EventDescription,
    EventInfo,
    EventDescriptionAlignment,
    EventTitle,
    EventDays,
    EventInfoDiv,
    EventBar,
    EventAlterButton,
    EventBarInfo,
    EventBarTitle,
    EventBarSubtitle,
    EventBarSubtitleTextDiv,
    EventBarTextBig,
    EventBarTextNormal,
    EventBarTextSmall,
} from '@/styles/pages/EventEditing/styles';

import Header from '@/Components/Header';
import TextField from '@/Components/TextField';
import { FiCalendar, FiMap, FiSave } from 'react-icons/fi';

const EventEditing: React.FC = () => {
    return(
        <Container>
            <Header />
            <EventDiv>
                <EventDescription>
                    <EventDescriptionAlignment>
                        <EventTitle>
                            Seguindo seus passos
                        </EventTitle>
                    </EventDescriptionAlignment>
                    <EventDays>
                        FALTAM 4 DIAS
                    </EventDays>
                </EventDescription>

                <EventInfo>
                   <EventInfoDiv>
                      <TextField name="name" title="Nome" />
                      <TextField name="theme" title="Tema" />
                      <TextField name="place" title="Local" />
                      <TextField name="adress" title="Endereço" />
                      <TextField name="description" title="Descrição" />
                      <TextField name="mail" title="Email" />
                      <TextField name="phone" title="Telefone" />
                      <TextField name="inscription_limit" title="Número máximo de inscrições" />
                   </EventInfoDiv>

                   <EventBar>

                        <EventAlterButton>
                            <FiSave size={24} color="#fff" />
                            Salvar alterações 
                        </EventAlterButton>

                        <EventBarInfo>
                           <EventBarTitle>Organização</EventBarTitle>
                           <EventBarSubtitle>
                               <FiCalendar size={24} color="#000" />
                               <EventBarSubtitleTextDiv>
                                    <EventBarTextNormal>Julia Silva Montano</EventBarTextNormal>
                               </EventBarSubtitleTextDiv>
                           </EventBarSubtitle>
                       </EventBarInfo>

                       <EventBarInfo>
                           <EventBarTitle>Data</EventBarTitle>
                           <EventBarSubtitle>
                               <FiCalendar size={24} color="#000" />
                               <EventBarTextBig>24/12/2020</EventBarTextBig>
                           </EventBarSubtitle>
                       </EventBarInfo>

                       <EventBarInfo>
                           <EventBarTitle>Local</EventBarTitle>
                           <EventBarSubtitle>
                               <FiMap size={24} color="#000" />
                                <EventBarSubtitleTextDiv>
                                    <EventBarTextBig>Fazenda Mucugê</EventBarTextBig>
                                    <EventBarTextSmall>Rua de santa apolonia 9D Lisboa</EventBarTextSmall>
                                </EventBarSubtitleTextDiv>
                           </EventBarSubtitle>
                       </EventBarInfo>

                   </EventBar>
                </EventInfo>  
                
            </EventDiv>
        </Container>
    );
}

export default EventEditing;
