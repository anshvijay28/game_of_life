import Grid from './Grid.js';
import Button from './Button.js';
import './App.css';

function App() {
  return (
    <div className="bg-sky-900 h-screen flex flex-col items-center justify-center gap-y-7">
        <Grid rows={35} cols={71}/>
        <div className="flex flex-row gap-0.5">
          <Button utility={"Start"}/>
          <Button utility={"Pause"}/>
          <Button utility={"Restart"}/>
        </div>
    </div>
  );
}

export default App;
