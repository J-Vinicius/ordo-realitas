import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("routes/home.tsx"),
  route("grimorio", "routes/grimorio.tsx"),
] satisfies RouteConfig
