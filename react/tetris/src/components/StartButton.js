import React from 'react';
import Stage from './Stage';
import styled from 'styled-components';

const StartButton = ({callback}) => {
    return(
        <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
    );
}

const StyledStartButton = styled.div`
    box-sizing: border-box;
    margin: 10px 0 0 0;
    padding: 20px;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    border: none;
    color: white;
    background: #333;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
`

export default StartButton;