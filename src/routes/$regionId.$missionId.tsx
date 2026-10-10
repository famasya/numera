import { createFileRoute } from "@tanstack/react-router";
import { Game } from "../components/Game";
import { gameSearch } from "../content/regions";
export const Route = createFileRoute("/$regionId/$missionId")({
  component: Game,
  validateSearch: gameSearch,
});
