import { Link } from "@tanstack/react-router";
import { hstack } from "../../styled-system/patterns";
import { link } from "../recipes/link";

export function Navigation() {
  return (
    <div>
      <div className={hstack()}>
        <Link className={link()} to="/">
          Home
        </Link>

        <Link className={link()} to="/d3ticks">
          D3 ticks
        </Link>
      </div>
    </div>
  );
}
