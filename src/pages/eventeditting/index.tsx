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
    EventDateEditDiv,
    EventDateEditTitle,
    EventDateEditInfo,
    EventDateEditShow,
    EventDateButton,
    HostPhoto,
    HostName,
    HostDiv,
    EventLocationDiv,
    EventLocationInfoDiv,
    EventLocationInfoTitle,
    EventLocationAdress,
    DefinitionDiv,
    DefinitionTitle,
    DefinitionButton,
    DefinitionText,
} from '@/styles/pages/EventEditing/styles';

import BarComponent from '@/Components/BarComponent';

import Header from '@/Components/Header';
import TextField from '@/Components/TextField';
import { FiCalendar, FiClipboard, FiEdit, FiMap, FiSave, FiEye } from 'react-icons/fi';

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

                        <BarComponent title="Organização">
                            <HostDiv>
                                <HostPhoto
                                    src="/assets/julia.jpg" 
                                    alt="Julia"
                                    width={40}
                                    height={40}
                                    unoptimized={true}>
                                </HostPhoto>
                                <HostName>Julia Silva Montano</HostName>
                            </HostDiv>
                        </BarComponent>

                        <BarComponent title="Data">
                            <EventDateEditDiv>

                                <EventDateEditTitle>Evento</EventDateEditTitle>
                                <EventDateEditInfo>
                                    <FiCalendar size={24} color="#000"/>
                                    <EventDateEditShow>Indefinido</EventDateEditShow>
                                    <EventDateButton>
                                        Editar data
                                        <FiEdit size={12} />
                                    </EventDateButton>
                                </EventDateEditInfo>

                                <EventDateEditTitle>Inscrições</EventDateEditTitle>
                                <EventDateEditInfo>
                                    <FiCalendar size={24} color="#000"/>
                                    <EventDateEditShow>Indefinido</EventDateEditShow>
                                    <EventDateButton>
                                        Editar data
                                        <FiEdit size={12} />
                                    </EventDateButton>
                                </EventDateEditInfo>
                                
                            </EventDateEditDiv>
                        </BarComponent>

                        <BarComponent title="Local" >
                            <EventLocationDiv>
                               <FiMap size={24} color="#000" />
                                <EventLocationInfoDiv>
                                    <EventLocationInfoTitle>Fazenda Mucugê</EventLocationInfoTitle>
                                    <EventLocationAdress>Rua de santa apolonia 9D Lisboa</EventLocationAdress>
                                </EventLocationInfoDiv>
                           </EventLocationDiv>
                        </BarComponent>

                        <BarComponent title="Definições">

                            <DefinitionDiv>
                                <DefinitionTitle>Status</DefinitionTitle>
                                <DefinitionButton>
                                    <FiClipboard size={24} />
                                    <DefinitionText>Confirmado</DefinitionText>
                                </DefinitionButton>
                            </DefinitionDiv>

                            <DefinitionDiv>
                                <DefinitionTitle>Visibilidade</DefinitionTitle>
                                <DefinitionButton>
                                    <FiEye size={24} />
                                    <DefinitionText>Confirmado</DefinitionText>
                                </DefinitionButton>
                            </DefinitionDiv>
                        </BarComponent>
                   </EventBar>
                </EventInfo>  
                
            </EventDiv>
        </Container>
    );
}

export default EventEditing;
