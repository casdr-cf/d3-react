import { Router, Route, RootRoute } from "@tanstack/react-router";
import { RootLayout } from "./routes/RootLayout";
import { HomeRoute } from "./routes/HomeRoute";
import { D3TicksRoute } from "./routes/D3TicksRoute";

const rootRoute = new RootRoute({
  component: RootLayout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomeRoute,
});

const d3TicksRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/d3ticks",
  component: D3TicksRoute,
});

const routeTree = rootRoute.addChildren([indexRoute, d3TicksRoute]);

export const router = new Router({ routeTree });
