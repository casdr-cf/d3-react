import { css } from "../styled-system/css";
import { center } from "../styled-system/patterns";

function App() {
  return (
    <div className={center({ height: "100vh" })}>
      <h1 className={css({ fontSize: "5xl", color: "rose.400" })}>
        Hello World!
      </h1>
    </div>
  );
}

export default App;
