import * as d3 from "d3";
import { useControls } from "leva";
import { hstack } from "../../styled-system/patterns";
import { container } from "../recipes/container";

export function ReactTick() {
  const { start, stop, count } = useControls({ start: 1, stop: 15, count: 10 });

  return (
    <div className={container()}>
      <ul className={hstack()}>
        {d3.ticks(start, stop, count).map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
}
