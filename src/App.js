import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";
import "./index.css";

// Simple dashboard components without complex imports
const SimpleEmployeeDashboard = () => {
  return (
    <div
      style={{
        padding: "20px",
        color: "white",
        background: "#0a0f1a",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#00ff88", marginBottom: "20px" }}>
        Employee Dashboard
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#1a2332",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #2a3f54",
          }}
        >
          <h3 style={{ color: "#00ff88", marginBottom: "10px" }}>
            Monthly Earnings
          </h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>$1,004.7</p>
          <p style={{ color: "#00ff88", fontSize: "14px" }}>↑ 3,211.56</p>
        </div>
        <div
          style={{
            background: "#1a2332",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #2a3f54",
          }}
        >
          <h3 style={{ color: "#00ff88", marginBottom: "10px" }}>
            Cost Benefits
          </h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>$5.71</p>
          <p style={{ color: "#00ff88", fontSize: "14px" }}>↑ 341</p>
        </div>
        <div
          style={{
            background: "#1a2332",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #2a3f54",
          }}
        >
          <h3 style={{ color: "#00ff88", marginBottom: "10px" }}>Efficiency</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>37%</p>
          <p style={{ color: "#888", fontSize: "14px" }}>23h 5m</p>
        </div>
      </div>
    </div>
  );
};

const SimpleBackendDashboard = () => {
  return (
    <div
      style={{
        padding: "20px",
        color: "white",
        background: "#0a0f1a",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#00ff88", marginBottom: "20px" }}>
        Backend Dashboard
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#1a2332",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #2a3f54",
          }}
        >
          <h3 style={{ color: "#00ff88", marginBottom: "10px" }}>CPU Usage</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>45%</p>
          <p style={{ color: "#00ff88", fontSize: "14px" }}>Normal</p>
        </div>
        <div
          style={{
            background: "#1a2332",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #2a3f54",
          }}
        >
          <h3 style={{ color: "#00ff88", marginBottom: "10px" }}>
            Memory Usage
          </h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>67%</p>
          <p style={{ color: "#ffa500", fontSize: "14px" }}>Warning</p>
        </div>
        <div
          style={{
            background: "#1a2332",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #2a3f54",
          }}
        >
          <h3 style={{ color: "#00ff88", marginBottom: "10px" }}>
            API Requests
          </h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>2.4M</p>
          <p style={{ color: "#00ff88", fontSize: "14px" }}>Response: 124ms</p>
        </div>
      </div>
    </div>
  );
};

const SimpleCompanyDashboard = () => {
  return (
    <div
      style={{
        padding: "20px",
        color: "white",
        background: "#0a0f1a",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#00ff88", marginBottom: "20px" }}>
        Company Dashboard
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#1a2332",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #2a3f54",
          }}
        >
          <h3 style={{ color: "#00ff88", marginBottom: "10px" }}>
            Total Revenue
          </h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>$2.4M</p>
          <p style={{ color: "#00ff88", fontSize: "14px" }}>↑ 12.5%</p>
        </div>
        <div
          style={{
            background: "#1a2332",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #2a3f54",
          }}
        >
          <h3 style={{ color: "#00ff88", marginBottom: "10px" }}>
            Active Users
          </h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>15,847</p>
          <p style={{ color: "#00ff88", fontSize: "14px" }}>↑ 8.2%</p>
        </div>
        <div
          style={{
            background: "#1a2332",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #2a3f54",
          }}
        >
          <h3 style={{ color: "#00ff88", marginBottom: "10px" }}>
            Fleet Performance
          </h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>94%</p>
          <p style={{ color: "#00ff88", fontSize: "14px" }}>Efficiency</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [activeView, setActiveView] = useState("employee");

  return (
    <div className="App">
      <Router>
        <div className="dashboard-container">
          <Sidebar activeView={activeView} setActiveView={setActiveView} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<SimpleEmployeeDashboard />} />
              <Route path="/employee" element={<SimpleEmployeeDashboard />} />
              <Route path="/backend" element={<SimpleBackendDashboard />} />
              <Route path="/company" element={<SimpleCompanyDashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
