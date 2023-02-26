import "./App.css";
import Home from "./Page/Home/Home";
import Introduce from "./Page/Introduce/Introduce";
import DetailsInfoLayout from "./Page/DetailsInfo/DetailsInfoLayout";
import SearchLayout from "./Page/SearchLayout/Search";
import Equirements from "./Page/Equirement/Equirement";
import About from "./Page/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/military" element={<Home />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/about" element={<About />} />
          <Route path="/equirement/:style" element={<Equirements />} />
          <Route path="/search" element={<SearchLayout />} />
          <Route path="/details/:id" element={<DetailsInfoLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
