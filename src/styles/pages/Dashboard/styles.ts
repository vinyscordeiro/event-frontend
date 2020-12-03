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

export const Logo = styled.h1`
    margin-top: 92px;
    font-size: 72px;
    color: #fff;
    font-weight: 400;
`;

export const SearchResponseBox = styled.div`
    width: 704px; 
    background-color: #E9E9E9;
    margin-top: 48px;
    border-radius: 2px;
`;

export const SearchResponseUnit = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-left: 3px solid #4F7EF4 ;
    height: 40px;
    border-radius: 2px;

    &:hover{
        background-color: #c4c4c4;
    }
`;

export const Info = styled.div`
    display: flex;
    justify-content: center;

    svg{
        margin-right: 8px;
    }
`;


