import './Grid.css';

function generateGrid(numSquares, color) {
    let gridItems = Array.from({ length: numSquares },  (_, index) => (
        <div key={index} className={`border box-border ${color} hover:bg-slate-50 h-5 w-5 custom-border`}></div>
    ));    
    return (
        <div className={`flex flex-row flex-wrap custom-dim items-center justify-center`}>
            {gridItems}
        </div>
    )
}

function Grid() {
    //1224 h-7 w-7
    //1711 h-6 w-7
    //2485 h-5 w-5
    //2015 h-5 w-5 gap-0.5
    return generateGrid(2485, "bg-slate-700");
}
    
export default Grid;