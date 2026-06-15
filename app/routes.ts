import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("routes/home.tsx"),
  route("ordo-realitas", "routes/ordo.tsx"),
  route("grimorio", "routes/(rituais)/grimorio.tsx"),
  route("grimorio/:ritual", "routes/(rituais)/ritual.tsx"),
  route("grimorio/novo", "routes/(rituais)/novo.tsx"),
] satisfies RouteConfig
