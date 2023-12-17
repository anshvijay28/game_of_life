import Grid from './Grid.js';
import Button from './Button.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [start, setStart] = useState(false);
  const [clear, setClear] = useState(false);
  const [pause, setPause] = useState(false);


  return (
    <div className="bg-sky-900 h-screen flex flex-col items-center justify-center gap-y-5">
      <a href="https://pi.math.cornell.edu/~lipa/mec/lesson6.html#:~:text=The%20Game%20of%20Life%20(an,of%20that%20cell's%208%20neighbors." className="mb-2 text-4xl font-extrabold leading-none tracking-tight
       text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Game of Life</a>
        <Grid 
          rows={31} cols={71} 
          start={start} setStart={setStart}
          clear={clear} setClear={setClear}
          pause={pause} setPause={setPause}/>
        <div className="flex flex-row gap-0.5 mt-2">
          <Button utility={"Start"} state={start} setState={setStart}/>
          <Button utility={"Pause"} state={pause} setState={setPause}/>
          <Button utility={"Clear"} state={clear} setState={setClear}/>
        </div>
    </div>
  );
}

export default App;
