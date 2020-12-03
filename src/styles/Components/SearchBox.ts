import styled from 'styled-components';

export const Container = styled.div`
    width: 704px; 
    height: 64px;
    margin-top: 64px;
`;

export const SearchBoxForm = styled.form`
    display: flex;
    flex: 1;
    height: 100%;
`;

export const SearchBoxInput = styled.input`
    display: flex;
    flex: 1;
    padding: 0 16px;
    border: 0;
    outline: none;
    padding: 0 10px;
`;

export const SearchBoxButton = styled.button`
    color: #fff;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #2A7610;
    width: 72px;
    height: 100%;

    border: 1px solid ;
    box-shadow: inset 0 0 20px rgba(42, 118, 116, 0.3);
    outline: 1px solid ;
    outline-color: rgba(42, 118, 116, .5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

    &:hover {
        box-shadow: inset 0 0 20px rgba(42, 118, 116, .5), 0 0 20px rgba(42, 118, 116, .2);
        outline-color: rgba(42, 118, 116, 0);
        outline-offset: 15px;

        svg {
            width: 30px;
            height: 30px;
        }
    }
`;