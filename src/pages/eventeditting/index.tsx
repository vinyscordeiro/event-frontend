import Image from 'next/image';

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
    EventBarBigText,
    EventBarMediumText,
    EventBarSmallText,
    EventBarPhoto,
    EventBarSubtitle,
    EventBarSubtitleTextDiv,
    EventBarDateDiv,
    EventBarDateIcon,
    EventBarDateTitle,
    EventBarDateModal,
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
                               <EventBarPhoto  
                                    src="/assets/julia.jpg" 
                                    alt="Julia"
                                    width={40}
                                    height={40}
                                    unoptimized={true}
                               />
                               <EventBarSubtitleTextDiv>
                                    <EventBarMediumText>Julia Silva Montano</EventBarMediumText>
                               </EventBarSubtitleTextDiv>
                           </EventBarSubtitle>
                       </EventBarInfo>

                       <EventBarInfo>
                           <EventBarTitle>Data</EventBarTitle>
                            <EventBarDateDiv>
                                <EventBarDateIcon>

                                </EventBarDateIcon>
                                <EventBarDateTitle>Indefinido</EventBarDateTitle>
                                <EventBarDateModal>Indefinido</EventBarDateModal>
                            </EventBarDateDiv>
                       </EventBarInfo>

                       <EventBarInfo>
                           <EventBarTitle>Local</EventBarTitle>
                           <EventBarSubtitle>
                               <FiMap size={24} color="#000" />
                                <EventBarSubtitleTextDiv>
                                    <EventBarBigText>Fazenda Mucugê</EventBarBigText>
                                    <EventBarSmallText>Rua de santa apolonia 9D Lisboa</EventBarSmallText>
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
