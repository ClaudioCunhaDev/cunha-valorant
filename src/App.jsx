import { RouterProvider } from "react-router-dom";
import { AllAgents } from "./Pages/Agents/AllAgents";
import { AllMaps } from "./Pages/Maps/AllMaps";
import { AllWeapons } from "./Pages/Weapons/AllWeapons";
import router from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
