import "./App.css";
import "./Login.css";
import MainScreen from "./components/MainScreen";
import Login from "./components/Login";
import { useUserContext } from "./context/user";

function App() {
  const { user } = useUserContext();
  return <div className="App">{user ? <MainScreen /> : <Login />}</div>;
}

export default App;
