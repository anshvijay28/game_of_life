import Grid from './Grid.js';
import Button from './Button.js'

function App() {
  return (
    <div className="bg-zinc-800 h-screen flex flex-col items-center justify-center gap-y-7">
        <Grid />
        <div className="flex flex-row gap-0.5">
          <Button utility={"Start"}/>
          <Button utility={"Pause"}/>
          <Button utility={"Restart"}/>
        </div>
    </div>
  );
}

export default App;
