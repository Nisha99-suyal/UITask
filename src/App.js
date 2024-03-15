import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/overview" element={<Overview />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
