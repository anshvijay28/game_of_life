import './Grid.css';
import { useState } from 'react';

export default function Grid({ rows, cols }) {
    let initGrid = Array.from({ length: rows },  (_, rIndex) => (
        Array.from({ length: cols}, (_, cIndex) => (0))));

    const [grid, setGrid] = useState(initGrid);
    
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