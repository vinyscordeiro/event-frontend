import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const EventDiv = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const EventDescription = styled.div`
    width: 100%;
    height: 288px;
`;

export const EventInfo = styled.div`
    width: 100%;
    display: flex;
   
`;

export const EventDescriptionDiv = styled.div`
    display: flex;
    height: 232px;
    flex-direction: row;
    background: #253A44 url('./assets/background2.jpg') no-repeat fixed;
    align-items: center;
    justify-content: space-around;
`;

export const EventTitle = styled.div`
    font-size: 72px;
    color: #fff;
`;

export const EventButton = styled.button`
    background: #43A018;
    width: 339px;
    height: 64px;
    border: 0;
    outline: none;
    font-family: 'Reem Kufi' sans-serif;
    -webkit-font-smoothing: antialised;
    font-size: 24px;
    color: #FFF;
    
`;

export const EventDays = styled.div`
    width: 100%;
    height: 55px;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #FFF;
`;

export const EventInfoDiv = styled.div`
    max-width: 776px;
`;

export const EventName = styled.div`
    font-size: 48px;
`;

export const EventType = styled.div`
    font-size: 24px;
    margin-bottom: 18px;
    color: #635A5A;
`;

export const EventText = styled.div`
    font-size: 18px;
`;

export const EventBar = styled.div`
    width: 344px;
`;

export const EventRegistration = styled.div`
    background-color: #4E7EF4;
    height: 95px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const EventRegistrationTitle = styled.div`
    color: #fff;
    font-size: 16px;
`;

export const EventRegistrationText = styled.div`
    max-width: 180px;
    margin-top: 8px;
    display: flex;
    align-items: center;

    > svg {
        margin-right: 8px;
    }
`;

export const EventRegistrationDate = styled.div`
    color: #fff;
    font-size: 24px;
`;
