import { gameSearch } from "../content/regions";
import { createFileRoute } from "@tanstack/react-router";
import { Game } from "../components/Game";
export const Route = createFileRoute("/")({
  component: Game,
  validateSearch: gameSearch,
});
