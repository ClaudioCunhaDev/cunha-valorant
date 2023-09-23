import { createBrowserRouter } from "react-router-dom";
import { AllAgents } from "./Pages/Agents/AllAgents";
import { AllMaps } from "./Pages/Maps/AllMaps";
import { AllWeapons } from "./Pages/Weapons/AllWeapons";
import { RootLayout } from "./RootLayout";
import { IndividualAgent } from "./Pages/IndividualAgent";
import { IndMap } from "./Pages/IndMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <AllAgents />,
      },
      {
        index: "agents",
        element: <AllAgents />,
      },
      {
        path: "agents/:agentId",
        element: <IndividualAgent />,
      },
      {
        path: "maps",
        element: <AllMaps />,
      },
      {
        path: "maps/:mapId",
        element: <IndMap />,
      },

      {
        path: "weapons",
        element: <AllWeapons />,
      },
    ],
  },
]);

export default router;
