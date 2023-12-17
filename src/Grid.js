import './Grid.css';
import { useState, useEffect } from 'react';

function checkAliveNeighbors(r, c, arr) {
    let alive = 0;
    const inc = [-1, 0, 1];
    for (let i = 0; i < inc.length; i++) {
        for (let j = 0; j < inc.length; j++) {
            if (i === 1 && j === 1) {
                continue;
            }
            const rInc = inc[i];
            const cInc = inc[j];
            if (!(r + rInc < 0 || c + cInc < 0 || r + rInc >= arr.length || c + cInc >= arr[0].length)) {
                if (arr[r + rInc][c + cInc] === 1) {
                    alive++;
                }
            }
        }   
    }
    return alive;
}

function createGrid(rows, cols) {
    return Array.from({ length: rows },  () => (
        Array.from({ length: cols}, () => (0))));
}

export default function Grid({ rows, cols, start, clear, pause, setStart, setClear, setPause }) {
    let initGrid = createGrid(rows, cols);
    
    const [grid, setGrid] = useState(initGrid);

    useEffect(() => {
        if (clear) {
            setGrid(initGrid);
            setStart(false);
            setPause(false);
            setClear(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clear, initGrid]);

    useEffect(() => {
        let intervalId;
        function lifeIteration(start, pause, setStart, setPause) {
            if (start) {
                let newGrid = createGrid(rows, cols);

                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j <  cols; j++) {
                        const aliveCount = checkAliveNeighbors(i, j, grid);
 
                        if (grid[i][j] === 1) {
                            if (aliveCount < 2 || aliveCount > 3) {
                                newGrid[i][j] = 0;
                            } else {
                                newGrid[i][j] = 1;
                            }
                        } else {
                            if (aliveCount === 3) {
                                newGrid[i][j] = 1;
                            }
                        }
                    }
                }

                setGrid([...newGrid]);

                if (pause) {
                    setStart(false);
                    setPause(false);
                    clearInterval(intervalId);
                }
            }
        } 
        intervalId = setInterval(() => lifeIteration(start, pause, setStart, setPause), 250);

        return () => {
            clearInterval(intervalId);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start, pause, grid]);
    
    function handleClick(rIndex, cIndex) {
        grid[rIndex][cIndex] === 0 ? 
            grid[rIndex][cIndex] = 1 : grid[rIndex][cIndex] = 0;
        setGrid([...grid]);
    }
    function renderGrid() {
        return Array.from({ length: rows },  (_, rIndex) => (
            Array.from({ length: cols}, (_, cIndex) => (
                <div   
                    key={[rIndex, cIndex]} 
                    onClick={() => handleClick(rIndex, cIndex)}
                    className={
                        `border box-border 
                        ${grid[rIndex][cIndex] === 0 ? "bg-zinc-500" : "bg-emerald-500"}
                        hover:bg-red-400 
                        h-5 w-5 
                        custom-border
                        cursor-pointer`}>
                </div>
            ))
        ));    
    }

    return (
        <div className={
            `flex flex-row flex-wrap 
            custom-dim 
            items-center 
            justify-center`}>
            {renderGrid()}
        </div>
    )
}