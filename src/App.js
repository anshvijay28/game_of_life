import Grid from './Grid.js';
import Button from './Button.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [start, setStart] = useState(false);
  const [clear, setClear] = useState(false);
  const [pause, setPause] = useState(false);


  return (
    <div className="bg-sky-900 h-screen flex flex-col items-center justify-center gap-y-7">
        <Grid 
          rows={35} cols={71} 
          start={start} setStart={setStart}
          clear={clear} setClear={setClear}
          pause={pause} setPause={setPause}/>
        <div className="flex flex-row gap-0.5">
          <Button utility={"Start"} state={start} setState={setStart}/>
          <Button utility={"Pause"} state={pause} setState={setPause}/>
          <Button utility={"Clear"} state={clear} setState={setClear}/>
        </div>
    </div>
  );
}

export default App;
