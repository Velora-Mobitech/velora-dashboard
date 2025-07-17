import React, { useState, useEffect } from "react";
import { Search, Bell, User, TrendingUp, TrendingDown } from "lucide-react";
import LiveFleetChart from "./charts/LiveFleetChart";
import ProgressCircle from "./charts/ProgressCircle";
import AreaChart from "./charts/AreaChart";

const EmployeeDashboard = () => {
  const [stats, setStats] = useState({
    monthlyEarnings: { value: "$1004.7", change: "3,211.56", trend: "up" },
    costBenefits: { value: "5.71", change: "341", trend: "up" },
    efficiency: { value: "37%", subtitle: "23h 5m" },
    fleetUtilization: { value: "84%", subtitle: "Active Fleet" },
  });

  const [fleetData, setFleetData] = useState([
    { name: "Rocket", status: "active", efficiency: "31.6%" },
    { name: "Greenhouse Bank Active", status: "active", efficiency: "85%" },
    { name: "Vatican effortsam", status: "active", efficiency: "72%" },
  ]);

  return (
    <div className="employee-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Employee Transportation</h1>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Track your transportation metrics and fleet performance
          </p>
        </div>
        <div className="header-controls">
          <div style={{ position: "relative" }}>
            <Search
              size={20}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)",
              }}
            />
            <input
              type="text"
              placeholder="Search..."
              className="search-box"
              style={{ paddingLeft: "40px" }}
            />
          </div>
          <button
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              padding: "8px",
              color: "var(--text-secondary)",
              cursor: "pointer",
            }}
          >
            <Bell size={20} />
          </button>
          <div className="user-profile">
            <div className="avatar"></div>
            <div>
              <div style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                Freelance Porteur
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                Fleet Manager
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Month Today</div>
            <div className={`stat-trend trend-${stats.monthlyEarnings.trend}`}>
              {stats.monthlyEarnings.trend === "up" ? (
                <TrendingUp size={12} />
              ) : (
                <TrendingDown size={12} />
              )}
              1.6%
            </div>
          </div>
          <div className="stat-value">{stats.monthlyEarnings.value}</div>
          <div
            className="stat-subtitle"
            style={{ color: "var(--accent-green)" }}
          >
            {stats.monthlyEarnings.change}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Cost/Benefits</div>
            <div className={`stat-trend trend-${stats.costBenefits.trend}`}>
              {stats.costBenefits.trend === "up" ? (
                <TrendingUp size={12} />
              ) : (
                <TrendingDown size={12} />
              )}
              2.1%
            </div>
          </div>
          <div className="stat-value">{stats.costBenefits.value}</div>
          <div
            className="stat-subtitle"
            style={{ color: "var(--accent-green)" }}
          >
            {stats.costBenefits.change}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Fleet Status</div>
            <div className="stat-trend trend-up">
              <TrendingUp size={12} />
              Active
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {fleetData.map((fleet, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 0",
                  borderBottom:
                    index < fleetData.length - 1
                      ? "1px solid var(--border-color)"
                      : "none",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--accent-green)",
                    }}
                  ></div>
                  <span style={{ fontSize: "0.875rem" }}>{fleet.name}</span>
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--accent-green)",
                    fontWeight: "600",
                  }}
                >
                  {fleet.efficiency}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Fleet Fleet Strategy</div>
          </div>
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <ProgressCircle percentage={37} label="37%" subtitle="23h 5m" />
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Live Fleet Status Chart */}
        <div className="card" style={{ gridColumn: "span 2" }}>
          <div className="chart-header">
            <div>
              <h3 className="chart-title">Live Fleet Status</h3>
              <div
                style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "2px",
                      background: "var(--accent-green)",
                    }}
                  ></div>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Active
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "2px",
                      background: "var(--accent-green-light)",
                    }}
                  ></div>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Standby
                  </span>
                </div>
              </div>
            </div>
            <div className="chart-controls">
              <button className="chart-btn active">Hour</button>
              <button className="chart-btn">Day</button>
              <button className="chart-btn">Week</button>
            </div>
          </div>
          <LiveFleetChart />
        </div>

        {/* Average Standby Chart */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Average Standby</h3>
          </div>
          <AreaChart
            data={[
              { time: "00:00", value: 200 },
              { time: "04:00", value: 150 },
              { time: "08:00", value: 300 },
              { time: "12:00", value: 250 },
              { time: "16:00", value: 400 },
              { time: "20:00", value: 350 },
              { time: "24:00", value: 300 },
            ]}
            color="var(--accent-green)"
          />
        </div>

        {/* Rottered Section */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Rottered</h3>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "var(--accent-green)",
              }}
            >
              $50.4
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <div style={{ marginBottom: "0.75rem" }}>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.25rem",
                }}
              >
                Offline
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.25rem",
                }}
              >
                Overall
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.25rem",
                }}
              >
                Les Accrue Menuits
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.25rem",
                }}
              >
                LoAlla Name
              </div>
              <div
                style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}
              >
                Sentiments Housetal
              </div>
            </div>
          </div>
        </div>

        {/* Predictive Analytics */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Predictive</h3>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <AreaChart
              data={[
                { time: "Jan", value: 100 },
                { time: "Feb", value: 120 },
                { time: "Mar", value: 90 },
                { time: "Apr", value: 150 },
                { time: "May", value: 130 },
                { time: "Jun", value: 170 },
              ]}
              color="var(--accent-green-light)"
              height={150}
            />
          </div>
        </div>

        {/* Carton Antienes */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Carton Antienes</h3>
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "var(--accent-green)",
              }}
            >
              700 X%
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <ProgressCircle
              percentage={75}
              label="16"
              subtitle="3,780k"
              size={100}
            />
          </div>
          <div
            style={{
              marginTop: "1rem",
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <span>Active</span>
              <span>45 | 84k</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <span>US</span>
              <span>| 2,761.8%</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>5%</span>
              <span>Town</span>
            </div>
          </div>
        </div>

        {/* ABRFTS Stage */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">ABRFTS Stage</h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <ProgressCircle
              percentage={85}
              label="85%"
              subtitle=""
              size={120}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
            }}
          >
            <span>ABrfts ⚡</span>
            <span>AIOnelts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
