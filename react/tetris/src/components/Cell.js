import React from 'react';
import {BLOCK} from '../block';
import styled from 'styled-components';

const Cell = ({type}) => {
    return(
        <StyledCell type={type} color={BLOCK[type].color} />
    );
}

const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color}, 0.4);
    border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
    border-bottom-color: rgba(${props => props.color}, 0.2);
    border-top-color: rgba(${props => props.color}, 0.2);
    border-right-color: rgba(${props => props.color}, 0.2);
    border-left-color: rgba(${props => props.color}, 0.3);
`

export default React.memo(Cell);