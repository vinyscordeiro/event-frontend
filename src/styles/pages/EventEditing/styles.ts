import styled, {css} from 'styled-components';
import Image from 'next/image';

interface SmallTextProps {
    isBlue?: Boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const EventDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EventDescription = styled.div`
    width: 100%;
    height: 280px;
`;

export const EventInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 56px 0;
`;


export const EventDescriptionAlignment = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 232px;
    background: #253A44 url('./assets/background2.jpg') no-repeat fixed;
`;

export const EventTitle = styled.div`
    font-size: 72px;
    color: #fff;
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

export const EventAlterButton = styled.div`
    background-color: #4E7EF4;
    height: 88px;
    border: 4px solid #4E7EF4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #FFF;

    > svg {
        margin-right: 16px;
    }

`;

export const EventBarInfo = styled.div`
    width: 100%;
    min-height: 112px;
    border-left: 4px solid #4F7EF4;
    margin-top: 25px;
    padding-left: 25px;
`;

export const EventBarTitle = styled.div`
    font-size: 36px;
`;

export const EventBarBigText = styled.div`
    font-size: 24px;
`;

export const EventBarMediumText = styled.div`
    font-size: 18px;
`;

export const EventBarSmallText = styled.div<SmallTextProps>`
    font-size: 10px;
    color: #635A5A;

    ${ props => props.isBlue && css`
        color: #4F7EF4;
    `}
`;

export const EventBarPhoto = styled(Image)`
    border-radius: 50%;
`;

export const EventBarDateDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

export const EventBarDateIcon = styled.div`
    height: 36px;
    width: 36px;
`;

export const EventBarDateTitle = styled.div`
    font-size: 18px;
`;

export const EventBarDateModal = styled.div`
    
`;

export const EventBarSubtitle = styled.div`
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;

    > svg {
        margin-right: 16px;
    }
`;

export const EventBarSubtitleTextDiv = styled.div`
    display: flex;
    flex-direction: column;
`;