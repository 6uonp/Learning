import React from 'react';
import styled from 'styled-components';

const Display = ({gameOver, text}) => {
    return(
        <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
    );
}

const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 10px 0 0 0;
    padding: 20px;
    border: 3px solid #333;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    background: #000;
    font-size: 0.8rem;
`

export default Display;