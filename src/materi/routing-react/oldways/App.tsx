import { BrowserRouter, Route,  Routes } from "react-router-dom";
import "./App.css";
import { About } from "./About";
import { Home } from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;