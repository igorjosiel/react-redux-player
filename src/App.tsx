import "./styles/global.css";

import { Provider as ReduxProvider } from "react-redux";
import { Routes, Route } from "react-router";

import { store } from "./store";
import Player from "./pages/Player";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ReduxProvider store={store}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="teste" element={<Player />} />
      </Routes>
    </ReduxProvider>
  );
}

export default App;
