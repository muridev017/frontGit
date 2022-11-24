import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { User } from "./pages/user/User";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:login" element={<User />} />
      </Routes>
  )
}