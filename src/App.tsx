import "./styles/global.css";

import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store";
/* import Player from "./pages/Player"; */
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ReduxProvider store={store}>
      <Dashboard />
    </ReduxProvider>
  );
}

export default App;
