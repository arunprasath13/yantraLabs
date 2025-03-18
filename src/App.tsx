import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ConfigurationPage from "./pages/ConfigurationPage";
import DepartmentPage from "./pages/DepartmentPage";
import useAutheStore from "./store/useAutheStore";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";

const ProtectedRoute = ({ element }: { element: React.ReactElement }) => {
  const { isAuthenticated } = useAutheStore();
  console.log("data: ",isAuthenticated)
  return isAuthenticated ? element : <Navigate to="/login"/>;
};


function App() {
  return (
    <Router>
       <ToastContainer position="bottom-right" autoClose={3000} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProtectedRoute element={<ConfigurationPage />} />} />
        <Route path="/configuration" element={<ProtectedRoute element={<ConfigurationPage />} />} />
        <Route path="/department" element={<ProtectedRoute element={<DepartmentPage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
