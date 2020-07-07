import React, { useState } from 'react';
import {createStage, checkCollision} from '../gameHelper';
import styled from 'styled-components';
import bgImage from '../img/rick.jpg';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useInterval } from '../hooks/useIntervals';
import { useGameStatus } from '../hooks/useGameStatus';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    const movePlayer = dir => {
        if(!checkCollision(player, stage, {x: dir, y: 0})){
            updatePlayerPos({x:dir, y:0});
        }
    }

    const startGame = () => {
        setStage(createStage());
        setDropTime(500);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }

    const drop = () => {
        //Level up after clear 10 rows
        if(rows > (level +1) * 10){
            setLevel(prev => prev +1);
            setDropTime(1000 / (level +1) + 200);
        }
        if(!checkCollision(player, stage, {x: 0, y: 1})){
            updatePlayerPos({x: 0, y: 1, collided: false})
        }else{
            //Game Over
            if(player.pos.y < 1){
                console.log("Game Over");
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({x: 0, y: 0, collided: true})
        }
    }

    const keyUp = ({keyCode}) => {
        if(!gameOver){
            if(keyCode === 40) {
                setDropTime(1000 / (level +1) + 200);
            }
        }
    }

    const dropPlayer = () => {
        setDropTime(null);
        drop();
    }

    const move = ({keyCode}) => {
        if(!gameOver){
            if(keyCode === 37){
                movePlayer(-1);
            }else if(keyCode === 39){
                movePlayer(1);
            }else if(keyCode === 40){
                dropPlayer();
            }else if(keyCode === 81){
                playerRotate(stage, -1);
            }else if(keyCode === 69){
                playerRotate(stage, 1);
            }
        }
    }

    useInterval(() => {
        drop();
    }, dropTime)

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                            <div>
                                <Display text={`Score: ${score}`} />
                                <Display text={`Rows: ${rows}`} />
                                <Display text={`Level: ${level}`} />
                            </div>
                        )
                    }
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
}

const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`

const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;
`

export default Tetris;