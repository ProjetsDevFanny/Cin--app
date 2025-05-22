// import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import UserList from "./pages/userList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userList" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
