import { Outlet } from "@tanstack/react-router";
import { Navigation } from "../components/Navigation";
import { center, vstack } from "../../styled-system/patterns";

export function RootLayout() {
  return (
    <div className={vstack({})}>
      <Navigation />
      <div className={center()}>
        <Outlet />
      </div>
    </div>
  );
}
