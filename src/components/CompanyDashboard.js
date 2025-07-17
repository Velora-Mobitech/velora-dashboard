import React, { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  Building2,
  Target,
  Award,
} from "lucide-react";
import AreaChart from "./charts/AreaChart";
import ProgressCircle from "./charts/ProgressCircle";

const CompanyDashboard = () => {
  const [companyMetrics, setCompanyMetrics] = useState({
    revenue: { value: "$2.4M", change: "12.5%", trend: "up" },
    employees: { value: "1,247", change: "8.2%", trend: "up" },
    departments: { value: "12", change: "0%", trend: "neutral" },
    satisfaction: { value: "94%", change: "3.1%", trend: "up" },
  });

  const [departmentPerformance, setDepartmentPerformance] = useState([
    { name: "Engineering", performance: 95, budget: 85, employees: 145 },
    { name: "Sales", performance: 88, budget: 92, employees: 87 },
    { name: "Marketing", performance: 82, budget: 78, employees: 34 },
    { name: "HR", performance: 91, budget: 88, employees: 23 },
    { name: "Finance", performance: 96, budget: 94, employees: 18 },
    { name: "Operations", performance: 89, budget: 86, employees: 156 },
  ]);

  const [goals, setGoals] = useState([
    {
      title: "Q4 Revenue Target",
      progress: 78,
      target: "$3M",
      current: "$2.34M",
    },
    {
      title: "Employee Retention",
      progress: 94,
      target: "95%",
      current: "94.2%",
    },
    {
      title: "Customer Satisfaction",
      progress: 92,
      target: "95%",
      current: "92.1%",
    },
    {
      title: "Market Expansion",
      progress: 65,
      target: "5 Cities",
      current: "3 Cities",
    },
  ]);

  const getTrendIcon = (trend) => {
    if (trend === "up") return <TrendingUp size={12} />;
    if (trend === "down") return <TrendingDown size={12} />;
    return null;
  };

  return (
    <div className="company-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Company Overview</h1>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Executive dashboard with key business metrics and insights
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Total Revenue</div>
            <div className={`stat-trend trend-${companyMetrics.revenue.trend}`}>
              {getTrendIcon(companyMetrics.revenue.trend)}
              {companyMetrics.revenue.change}
            </div>
          </div>
          <div className="stat-value">{companyMetrics.revenue.value}</div>
          <div className="stat-subtitle">This Quarter</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Total Employees</div>
            <div
              className={`stat-trend trend-${companyMetrics.employees.trend}`}
            >
              {getTrendIcon(companyMetrics.employees.trend)}
              {companyMetrics.employees.change}
            </div>
          </div>
          <div className="stat-value">{companyMetrics.employees.value}</div>
          <div className="stat-subtitle">Active workforce</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Departments</div>
            <Building2 size={20} color="var(--accent-green)" />
          </div>
          <div className="stat-value">{companyMetrics.departments.value}</div>
          <div className="stat-subtitle">Business units</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">Employee Satisfaction</div>
            <div
              className={`stat-trend trend-${companyMetrics.satisfaction.trend}`}
            >
              {getTrendIcon(companyMetrics.satisfaction.trend)}
              {companyMetrics.satisfaction.change}
            </div>
          </div>
          <div className="stat-value" style={{ color: "var(--accent-green)" }}>
            {companyMetrics.satisfaction.value}
          </div>
          <div className="stat-subtitle">Monthly survey</div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Revenue Trend */}
        <div className="card" style={{ gridColumn: "span 2" }}>
          <div className="chart-header">
            <h3 className="chart-title">Revenue Trend (Last 12 Months)</h3>
            <div className="chart-controls">
              <button className="chart-btn active">Revenue</button>
              <button className="chart-btn">Profit</button>
              <button className="chart-btn">Growth</button>
            </div>
          </div>
          <AreaChart
            data={[
              { time: "Jan", value: 1800000 },
              { time: "Feb", value: 1950000 },
              { time: "Mar", value: 2100000 },
              { time: "Apr", value: 2050000 },
              { time: "May", value: 2200000 },
              { time: "Jun", value: 2350000 },
              { time: "Jul", value: 2400000 },
              { time: "Aug", value: 2300000 },
              { time: "Sep", value: 2450000 },
              { time: "Oct", value: 2500000 },
              { time: "Nov", value: 2400000 },
              { time: "Dec", value: 2600000 },
            ]}
            color="var(--accent-green)"
            height={250}
            formatValue={(value) => `$${(value / 1000000).toFixed(1)}M`}
          />
        </div>

        {/* Department Performance */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Department Performance</h3>
          </div>
          <div style={{ marginTop: "1rem" }}>
            {departmentPerformance.map((dept, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1rem",
                  padding: "12px",
                  background: "var(--secondary-bg)",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "0.875rem", fontWeight: "600" }}>
                    {dept.name}
                  </span>
                  <span
                    style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                  >
                    {dept.employees} employees
                  </span>
                </div>
                <div
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-secondary)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Performance
                    </div>
                    <div
                      style={{
                        background: "var(--border-color)",
                        height: "6px",
                        borderRadius: "3px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          background: "var(--accent-green)",
                          height: "100%",
                          width: `${dept.performance}%`,
                          borderRadius: "3px",
                        }}
                      ></div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "var(--accent-green)",
                      minWidth: "35px",
                    }}
                  >
                    {dept.performance}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Goals */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Strategic Goals Progress</h3>
          </div>
          <div style={{ marginTop: "1rem" }}>
            {goals.map((goal, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1.5rem",
                  padding: "12px",
                  background: "var(--secondary-bg)",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span style={{ fontSize: "0.875rem", fontWeight: "600" }}>
                    {goal.title}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "var(--accent-green)",
                    }}
                  >
                    {goal.progress}%
                  </span>
                </div>
                <div
                  style={{
                    background: "var(--border-color)",
                    height: "8px",
                    borderRadius: "4px",
                    overflow: "hidden",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      background: "var(--accent-green)",
                      height: "100%",
                      width: `${goal.progress}%`,
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  <span>Current: {goal.current}</span>
                  <span>Target: {goal.target}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Overview */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Financial Overview</h3>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Total Assets
                </span>
                <span
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "var(--accent-green)",
                  }}
                >
                  $8.2M
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Cash Flow
                </span>
                <span style={{ fontSize: "1.125rem", fontWeight: "700" }}>
                  $450K
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Operating Margin
                </span>
                <span
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "var(--accent-green)",
                  }}
                >
                  18.5%
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  ROI
                </span>
                <span
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "var(--accent-green)",
                  }}
                >
                  24.2%
                </span>
              </div>
            </div>
            <AreaChart
              data={[
                { time: "Q1", value: 15.2 },
                { time: "Q2", value: 18.1 },
                { time: "Q3", value: 16.8 },
                { time: "Q4", value: 18.5 },
              ]}
              color="var(--accent-green-light)"
              height={120}
              formatValue={(value) => `${value}%`}
            />
          </div>
        </div>

        {/* Market Intelligence */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Market Intelligence</h3>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Market Share
                </span>
                <span
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "var(--accent-green)",
                  }}
                >
                  12.8%
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Customer Growth
                </span>
                <span
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "var(--accent-green)",
                  }}
                >
                  +24%
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Competitive Position
                </span>
                <span style={{ fontSize: "1.125rem", fontWeight: "700" }}>
                  Strong
                </span>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <ProgressCircle
                percentage={82}
                label="82%"
                subtitle="Market Position"
                color="var(--accent-green)"
                size={100}
              />
            </div>
          </div>
        </div>

        {/* Employee Analytics */}
        <div className="card">
          <div className="chart-header">
            <h3 className="chart-title">Employee Analytics</h3>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Retention Rate
                </span>
                <span
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "var(--accent-green)",
                  }}
                >
                  94.2%
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Avg. Tenure
                </span>
                <span style={{ fontSize: "1.125rem", fontWeight: "700" }}>
                  3.2 years
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Training Hours
                </span>
                <span
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "var(--accent-green)",
                  }}
                >
                  2,450
                </span>
              </div>
            </div>
            <AreaChart
              data={[
                { time: "Jan", value: 92 },
                { time: "Feb", value: 93 },
                { time: "Mar", value: 91 },
                { time: "Apr", value: 94 },
                { time: "May", value: 95 },
                { time: "Jun", value: 94 },
              ]}
              color="var(--accent-green-light)"
              height={120}
              formatValue={(value) => `${value}%`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
