import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";

export default function App() {
  return (
      <Routes>
        <Route data-testid="rota"  path="/" element={<Home />} />
      </Routes>
  )
}