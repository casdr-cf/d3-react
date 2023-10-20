import * as d3 from "d3";
import { hstack, vstack } from "../../styled-system/patterns";
import { useState } from "react";

export function ReactTick() {
  const [start, setStart] = useState(1);
  const [stop, setStop] = useState(15);
  const [count, setCount] = useState(10);

  return (
    <div className={vstack()}>
      <input
        type="number"
        value={start}
        onChange={(e) => setStart(+e.target.value)}
      />
      <input
        type="number"
        value={stop}
        onChange={(e) => setStop(+e.target.value)}
      />
      <div className={hstack()}>
        <input
          type="range"
          min={1}
          max={20}
          step={1}
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <span>{count}</span>
      </div>
      <ul className={hstack()}>
        {d3.ticks(start, stop, count).map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
}
