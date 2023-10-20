import { center } from "../styled-system/patterns";
import { ReactTick } from "./components/ReactTick";

function App() {
  return (
    <div className={center({ height: "100vh", fontSize: "4xl" })}>
      <ReactTick />
    </div>
  );
}

export default App;
