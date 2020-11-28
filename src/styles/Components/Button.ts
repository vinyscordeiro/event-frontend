import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.button`
    width: 142px;
    height: 36px;
    background-color: #4479FF;
    align-items: center;
    border: 0;
    border-radius: 0;
    color: #fff;
    font-size: 14px;
    outline: none;
    transition: background-color 0.2s;

    &:hover{
        background-color: ${shade(0.2, '#4479FF')}
    }
`;
