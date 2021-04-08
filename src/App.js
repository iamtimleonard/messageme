import "./App.css";
import "./Login.css";
import MainScreen from "./components/MainScreen";
import Auth from "./components/Auth";
import { useUserContext } from "./context/user";

function App() {
  const { user } = useUserContext();
  return <div className="App">{user ? <MainScreen /> : <Auth />}</div>;
}

export default App;
