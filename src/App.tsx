import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfigurationPage from "./pages/ConfigurationPage";
import DepartmentPage from "./pages/DepartmentPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/configuration" element={<ConfigurationPage />} />
        <Route path="/department" element={<DepartmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
