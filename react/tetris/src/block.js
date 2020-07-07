export const BLOCK = {
    0: {
        shape: [[0]],
        color: '30, 30, 30'
    },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '80, 227, 230'
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: '36, 95, 223'
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '32, 205, 233'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: '220, 245, 40'
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '212, 25, 23'
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '122, 245, 66'
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '224, 2, 224'
    }
}

export const randomBlock = () => {
    const blockShape = 'IJLOSTZ';
    const randomChoose = blockShape[Math.floor(Math.random() * blockShape.length)];
    return BLOCK[randomChoose];
}