import { Nav } from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Details } from "./screens/Details";
import Form from "./screens/Form";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";

const App = () => {
  return (
    <div>
      <Nav />
      <main className="container py-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/diary/form" element={<Form />} />
          <Route path="/diary/form/:id" element={<Form />} />
          <Route path="/diary/details/:id" element={<Details />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
