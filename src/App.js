import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Layout from "./components/Layout/Layout";
import Rooms from "./components/Rooms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="reg" element={<Register />} />
            <Route path="rooms" element={<Rooms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

