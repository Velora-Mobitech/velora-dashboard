import React, { useState } from "react";
import {
  Database,
  Cpu,
  HardDrive,
  Wifi,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import AreaChart from "./charts/AreaChart";
import ProgressCircle from "./charts/ProgressCircle";

const BackendDashboard = () => {
  const [systemMetrics] = useState({
    cpu: { usage: 45, status: "normal" },
    memory: { usage: 67, status: "warning" },
    disk: { usage: 32, status: "normal" },
    network: { usage: 89, status: "high" },
  });

  const [apiMetrics] = useState({
    totalRequests: "2.4M",
    responseTime: "124ms",
    errorRate: "0.02%",
    uptime: "99.9%",
  });

  const [services] = useState([
    {
      name: "User Authentication API",
      status: "healthy",
      uptime: "99.9%",
      responseTime: "95ms",
    },
    {
      name: "Fleet Management Service",
      status: "healthy",
      uptime: "99.8%",
      responseTime: "112ms",
    },
    {
      name: "Payment Processing",
      status: "warning",
      uptime: "99.2%",
      responseTime: "245ms",
    },
    {
      name: "Analytics Engine",
      status: "healthy",
      uptime: "99.9%",
      responseTime: "87ms",
    },
    {
      name: "Notification Service",
      status: "error",
      uptime: "97.8%",
      responseTime: "1.2s",
    },
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "healthy":
        return <CheckCircle size={16} color="var(--accent-green)" />;
      case "warning":
        return <AlertTriangle size={16} color="var(--warning-color)" />;
      case "error":
        return <XCircle size={16} color="var(--error-color)" />;
      default:
        return <CheckCircle size={16} color="var(--accent-green)" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "normal":
        return "var(--accent-green)";
      case "warning":
        return "var(--warning-color)";
      case "high":
        return "var(--error-color)";
      default:
        return "var(--accent-green)";
    }
  };

  return (
    <div className="backend-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Backend Monitor</h1>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Real-time system performance and API monitoring
          </p>
        </div>
      </div>

      {/* System Metrics */}
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">CPU Usage</div>
            <Cpu size={20} color="var(--accent-green)" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <ProgressCircle
              percentage={systemMetrics.cpu.usage}
              label={`${systemMetrics.cpu.usage}%`}
              subtitle="CPU"
              color={getStatusColor(systemMetrics.cpu.status)}
            />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Memory Usage</div>
            <Database size={20} color="var(--warning-color)" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <ProgressCircle
              percentage={systemMetrics.memory.usage}
              label={`${systemMetrics.memory.usage}%`}
              subtitle="RAM"
              color={getStatusColor(systemMetrics.memory.status)}
            />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Disk Usage</div>
            <HardDrive size={20} color="var(--accent-green)" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <ProgressCircle
              percentage={systemMetrics.disk.usage}
              label={`${systemMetrics.disk.usage}%`}
              subtitle="Storage"
              color={getStatusColor(systemMetrics.disk.status)}
            />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Network I/O</div>
            <Wifi size={20} color="var(--error-color)" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <ProgressCircle
              percentage={systemMetrics.network.usage}
              label={`${systemMetrics.network.usage}%`}
              subtitle="Bandwidth"
              color={getStatusColor(systemMetrics.network.status)}
            />
          </div>
        </div>
      </div>

      {/* API Metrics */}
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Total Requests</div>
          </div>
          <div className="stat-value">{apiMetrics.totalRequests}</div>
          <div className="stat-subtitle">Last 24 hours</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Avg Response Time</div>
          </div>
          <div className="stat-value">{apiMetrics.responseTime}</div>
          <div className="stat-subtitle">API endpoints</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Error Rate</div>
          </div>
          <div className="stat-value" style={{ color: "var(--accent-green)" }}>
            {apiMetrics.errorRate}
          </div>
          <div className="stat-subtitle">Extremely low</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">System Uptime</div>
          </div>
          <div className="stat-value" style={{ color: "var(--accent-green)" }}>
            {apiMetrics.uptime}
          </div>
          <div className="stat-subtitle">This month</div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="dashboard-grid">
        {/* System Performance Chart */}
        <div className="card" style={{ gridColumn: "span 2" }}>
          <div className="chart-header">
            <h3 className="chart-title">System Performance (Last 24 Hours)</h3>
            <div className="chart-controls">
              <button className="chart-btn active">CPU</button>
              <button className="chart-btn">Memory</button>
              <button className="chart-btn">Network</button>
            </div>
          </div>
          <AreaChart
            data={[
              { time: "00:00", value: 35 },
              { time: "04:00", value: 28 },
              { time: "08:00", value: 52 },
              { time: "12:00", value: 65 },
              { time: "16:00", value: 58 },
              { time: "20:00", value: 45 },
              { time: "24:00", value: 42 },
            ]}
            color="var(--accent-green)"
            height={250}
          />
        </div>

        {/* Service Status */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Service Status</h3>
          </div>
          <div style={{ marginTop: "1rem" }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom:
                    index < services.length - 1
                      ? "1px solid var(--border-color)"
                      : "none",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {getStatusIcon(service.status)}
                  <div>
                    <div style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                      {service.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {service.responseTime} avg response
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "var(--accent-green)",
                    }}
                  >
                    {service.uptime}
                  </div>
                  <div
                    style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                  >
                    uptime
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Database Performance */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Database Performance</h3>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Query Performance
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "var(--accent-green)",
                  }}
                >
                  Excellent
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Connection Pool
                </span>
                <span style={{ fontSize: "0.875rem", fontWeight: "600" }}>
                  45/100
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Cache Hit Rate
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "var(--accent-green)",
                  }}
                >
                  94.2%
                </span>
              </div>
            </div>
            <AreaChart
              data={[
                { time: "Mon", value: 85 },
                { time: "Tue", value: 92 },
                { time: "Wed", value: 88 },
                { time: "Thu", value: 95 },
                { time: "Fri", value: 94 },
                { time: "Sat", value: 89 },
                { time: "Sun", value: 93 },
              ]}
              color="var(--accent-green-light)"
              height={120}
            />
          </div>
        </div>

        {/* Error Logs */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Recent Error Logs</h3>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <div
              style={{
                background: "var(--secondary-bg)",
                borderRadius: "8px",
                padding: "1rem",
                fontSize: "0.75rem",
                fontFamily: "monospace",
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              <div
                style={{ color: "var(--error-color)", marginBottom: "0.5rem" }}
              >
                [ERROR] 2025-07-17 14:32:15 - Payment service timeout
              </div>
              <div
                style={{
                  color: "var(--warning-color)",
                  marginBottom: "0.5rem",
                }}
              >
                [WARN] 2025-07-17 14:28:03 - High memory usage detected
              </div>
              <div
                style={{ color: "var(--info-color)", marginBottom: "0.5rem" }}
              >
                [INFO] 2025-07-17 14:25:12 - Database backup completed
              </div>
              <div
                style={{ color: "var(--error-color)", marginBottom: "0.5rem" }}
              >
                [ERROR] 2025-07-17 14:20:45 - Failed to connect to notification
                service
              </div>
              <div style={{ color: "var(--accent-green)" }}>
                [SUCCESS] 2025-07-17 14:18:22 - System health check passed
              </div>
            </div>
          </div>
        </div>

        {/* Server Resources */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Server Resources</h3>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Active Servers
                </span>
                <span
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "var(--accent-green)",
                  }}
                >
                  8/10
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Load Balancer
                </span>
                <span style={{ fontSize: "1.25rem", fontWeight: "700" }}>
                  Healthy
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Auto Scaling
                </span>
                <span
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "var(--accent-green)",
                  }}
                >
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendDashboard;
