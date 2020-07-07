export const WIDTH = 12;
export const HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(HEIGHT), () => 
        new Array(WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
    for(let y = 0; y < player.block.length; y+=1){
        for( let x = 0; x < player.block[y].length; x+=1){
            //Check if r on an actual block cell
            if(player.block[y][x] !== 0){
                //Check if move inside the game area height(y)
                if(
                !stage[y+ player.pos.y + moveY] || 
                //Check if move inside the game area width(x)
                    !stage[y + player.pos.y + moveY][x+player.pos.x + moveX] ||
                //Check that the cell r moving to isn't set to clear
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
}

