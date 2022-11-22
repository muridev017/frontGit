import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Repo } from "./pages/Repo";
import { Repos } from "./pages/Repos";

export default function App(){
  return (
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/repos" element= {<Repos/>} />
      <Route path="/repo/*" element= {<Repo/>} />
    </Routes>
  )
}