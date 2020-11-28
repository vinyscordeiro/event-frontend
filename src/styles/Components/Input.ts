import styled from 'styled-components';

export const Container = styled.div`
    flex:1;
    height: 44px;
`;

export const BlueDiv = styled.div`
    align-items: center;
    background-color: #4661C2;
    width: 60px;
`;

export const InputDiv = styled.div`
    align-items: center
`;

export const InputElement = styled.input`
    outline: 0;
    flex: 1;

    &::placeholder{
        color: #635A5A;
    }
`;