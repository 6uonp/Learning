import {useState, useCallback} from 'react';
import {randomBlock, BLOCK} from '../block';
import { WIDTH, checkCollision } from '../gameHelper';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x:0, y:0},
        block: BLOCK[0].shape,
        collided: false
    });

    const rotate = (matrix, dir) => {
        //Trans rows to cols
        const rotatedBlock = matrix.map((_, index) => 
            matrix.map(col => col[index])
        );
        //Reverse each row to get rotated matrix
        if (dir > 0) return rotatedBlock.map(row => row.reverse());
        return rotatedBlock.reverse();
    }

    const playerRotate = (stage, dir) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.block = rotate(clonedPlayer.block, dir);

        const pos = clonedPlayer.pos.x;
        let offset = 1;
        while(checkCollision(clonedPlayer, stage, {x:0, y:0})){
            clonedPlayer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if(offset > clonedPlayer.block[0].length){
                rotate(clonedPlayer.block, -dir);
                clonedPlayer.pos.x = pos;
                return;
            }
        }

        setPlayer(clonedPlayer);
    }

    const updatePlayerPos = ({x, y, collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos: {x:(prev.pos.x += x), y:(prev.pos.y += y)},
            collided
        }))
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {x: WIDTH / 2-2, y:0},
            block: randomBlock().shape,
            collied: false
        })
    }, [])
    return [player, updatePlayerPos, resetPlayer, playerRotate];
}