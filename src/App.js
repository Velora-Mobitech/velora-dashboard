import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import EmployeeDashboard from "./components/EmployeeDashboard";
import BackendDashboard from "./components/BackendDashboard";
import CompanyDashboard from "./components/CompanyDashboard";
import "./App.css";

function App() {
  const [activeView, setActiveView] = useState("employee");

  return (
    <div className="App">
      <Router>
        <div className="dashboard-container">
          <Sidebar activeView={activeView} setActiveView={setActiveView} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<EmployeeDashboard />} />
              <Route path="/employee" element={<EmployeeDashboard />} />
              <Route path="/backend" element={<BackendDashboard />} />
              <Route path="/company" element={<CompanyDashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
