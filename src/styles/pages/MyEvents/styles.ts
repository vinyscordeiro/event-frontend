import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #253A44 url('./assets/background1.jpg') no-repeat fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    margin-top: 92px;
    font-size: 72px;
    color: #fff;
    font-weight: 400;
`;

export const EventsDiv = styled.div`
   width: 960px;
   margin-top: 48px;
`;

export const EventSelection = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   margin-bottom: 24px;
`;

export const Subtitle = styled.div`
    color: #FFF;
    font-size: 18px;
    margin-right: 32px;
    border-bottom: 2px solid transparent;

    &:hover{
        padding-bottom: 4px;
        border-bottom: 2px solid #4661C2;
        color: #4661C2;
    }
`;

export const Event = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 1px;
    height: 46px;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #fff;
    border: 4px solid #fff;
    margin-top: 4px;
    opacity: 0.9;

    &:hover {
        border: 4px solid #4661C2;
        opacity: 1;
    }
`;

export const EventContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const EventTitle = styled.div`
    font-weight: bold;
`;

export const EventText = styled.div`
    margin-left: 4px;
`;

export const EventButton = styled.button`
    height: 100%;
    
`;