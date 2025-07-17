import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search,
  Bell,
  User,
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  Shield,
  Users,
  Star,
} from "lucide-react";
import CountUp from "react-countup";
import { toast, Toaster } from "react-hot-toast";
import LiveFleetChart from "./charts/LiveFleetChart";
import ProgressCircle from "./charts/ProgressCircle";
import AreaChart from "./charts/AreaChart";

const EmployeeDashboard = () => {
  const [stats, setStats] = useState({
    monthlyEarnings: { value: 1004.7, change: "3,211.56", trend: "up" },
    costBenefits: { value: 5.71, change: "341", trend: "up" },
    efficiency: { value: 37, subtitle: "23h 5m" },
    fleetUtilization: { value: 84, subtitle: "Active Fleet" },
  });

  const [fleetData, setFleetData] = useState([
    { name: "Rocket", status: "active", efficiency: 31.6, trend: "up" },
    {
      name: "Greenhouse Bank Active",
      status: "active",
      efficiency: 85,
      trend: "up",
    },
    {
      name: "Vatican effortsam",
      status: "active",
      efficiency: 72,
      trend: "down",
    },
  ]);

  const [notifications, setNotifications] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [realTimeData, setRealTimeData] = useState({
    activeVehicles: 24,
    totalDistance: 1542,
    fuelEfficiency: 92.3,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(0, 255, 136, 0.3)",
        "0 0 40px rgba(0, 255, 136, 0.1)",
        "0 0 20px rgba(0, 255, 136, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Intersection Observer for animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Dashboard loaded successfully!", {
        duration: 3000,
        position: "top-right",
        style: {
          background: "#1e2a3a",
          color: "#ffffff",
          border: "1px solid #00ff88",
          borderRadius: "12px",
          backdropFilter: "blur(20px)",
        },
      });
    }, 2000);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        ...prevStats,
        efficiency: {
          ...prevStats.efficiency,
          value: Math.max(
            20,
            Math.min(
              100,
              prevStats.efficiency.value + (Math.random() - 0.5) * 5
            )
          ),
        },
      }));

      setRealTimeData((prev) => ({
        activeVehicles: Math.max(
          20,
          Math.min(
            30,
            prev.activeVehicles + Math.floor((Math.random() - 0.5) * 3)
          )
        ),
        totalDistance: prev.totalDistance + Math.floor(Math.random() * 10),
        fuelEfficiency: Math.max(
          85,
          Math.min(98, prev.fuelEfficiency + (Math.random() - 0.5) * 2)
        ),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNotificationClick = () => {
    setNotifications(0);
    toast("All notifications cleared!", {
      icon: "🔔",
      style: {
        background: "#1e2a3a",
        color: "#ffffff",
        borderRadius: "12px",
      },
    });
  };

  if (isLoading) {
    return (
      <div className="employee-dashboard">
        <div
          className="loading-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <motion.div
            className="loader"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            style={{ marginTop: "1rem", color: "var(--text-secondary)" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading dashboard...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Toaster />
      <motion.div
        className="employee-dashboard"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Enhanced Header */}
        <motion.div className="dashboard-header" variants={itemVariants}>
          <div>
            <motion.h1
              className="dashboard-title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Employee Transportation
            </motion.h1>
            <motion.p
              style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Real-time fleet monitoring and performance analytics
            </motion.p>
          </div>
          <div className="header-controls">
            <motion.div
              style={{ position: "relative" }}
              whileHover={{ scale: 1.02 }}
            >
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
                placeholder="Search fleet, routes, metrics..."
                className="search-box"
                style={{ paddingLeft: "40px" }}
              />
            </motion.div>

            <motion.button
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                borderRadius: "12px",
                padding: "12px",
                color: "var(--text-secondary)",
                cursor: "pointer",
                position: "relative",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ scale: 1.1, borderColor: "var(--accent-green)" }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNotificationClick}
              variants={glowVariants}
              animate={notifications > 0 ? "animate" : ""}
            >
              <Bell size={20} />
              <AnimatePresence>
                {notifications > 0 && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="notification-badge"
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-5px",
                      background:
                        "linear-gradient(135deg, var(--error-color), #ff6b7a)",
                      color: "white",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      fontSize: "11px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      boxShadow: "0 0 10px var(--error-color)",
                    }}
                  >
                    {notifications}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.div
              className="user-profile"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div className="avatar" whileHover={{ rotate: 5 }} />
              <div>
                <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>
                  Freelance Porteur
                </div>
                <div
                  style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                >
                  Fleet Manager
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Star size={16} color="var(--accent-green)" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Real-time Stats Banner */}
        <motion.div
          style={{
            background: "var(--gradient-card)",
            backdropFilter: "blur(20px)",
            border: "1px solid var(--border-color)",
            borderRadius: "16px",
            padding: "1rem",
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <motion.div
            style={{ textAlign: "center" }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "var(--accent-green)",
              }}
            >
              <CountUp end={realTimeData.activeVehicles} duration={1} />
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              Active Vehicles
            </div>
          </motion.div>
          <motion.div
            style={{ textAlign: "center" }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "var(--accent-green)",
              }}
            >
              <CountUp end={realTimeData.totalDistance} duration={1} />
              km
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              Distance Today
            </div>
          </motion.div>
          <motion.div
            style={{ textAlign: "center" }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "var(--accent-green)",
              }}
            >
              <CountUp
                end={realTimeData.fuelEfficiency}
                duration={1}
                decimals={1}
              />
              %
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              Fuel Efficiency
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats Cards */}
        <motion.div className="stat-cards" variants={containerVariants}>
          <motion.div
            className="stat-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="stat-header">
              <div className="stat-title">Month Revenue</div>
              <motion.div
                className={`stat-trend trend-${stats.monthlyEarnings.trend}`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stats.monthlyEarnings.trend === "up" ? (
                  <TrendingUp size={12} />
                ) : (
                  <TrendingDown size={12} />
                )}
                1.6%
              </motion.div>
            </div>
            <div className="stat-value">
              $
              <CountUp
                end={stats.monthlyEarnings.value}
                duration={2}
                decimals={1}
              />
            </div>
            <div
              className="stat-subtitle"
              style={{ color: "var(--accent-green)" }}
            >
              +{stats.monthlyEarnings.change} from last month
            </div>
          </motion.div>

          <motion.div
            className="stat-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="stat-header">
              <div className="stat-title">Cost Efficiency</div>
              <motion.div
                className={`stat-trend trend-${stats.costBenefits.trend}`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                {stats.costBenefits.trend === "up" ? (
                  <TrendingUp size={12} />
                ) : (
                  <TrendingDown size={12} />
                )}
                2.1%
              </motion.div>
            </div>
            <div className="stat-value">
              <CountUp
                end={stats.costBenefits.value}
                duration={2}
                decimals={2}
              />
            </div>
            <div
              className="stat-subtitle"
              style={{ color: "var(--accent-green)" }}
            >
              Ratio improved by {stats.costBenefits.change}
            </div>
          </motion.div>

          <motion.div
            className="stat-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="stat-header">
              <div className="stat-title">Fleet Status</div>
              <motion.div
                className="stat-trend trend-up"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Activity size={12} />
                Live
              </motion.div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <AnimatePresence>
                {fleetData.map((fleet, index) => (
                  <motion.div
                    key={fleet.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(0, 255, 136, 0.05)",
                    }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid var(--border-color)",
                      background: "var(--secondary-bg)",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <motion.div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background:
                            fleet.status === "active"
                              ? "var(--accent-green)"
                              : "var(--warning-color)",
                        }}
                        animate={{
                          boxShadow:
                            fleet.status === "active"
                              ? [
                                  "0 0 0 0 var(--accent-green)",
                                  "0 0 0 8px rgba(0, 255, 136, 0)",
                                  "0 0 0 0 var(--accent-green)",
                                ]
                              : [
                                  "0 0 0 0 var(--warning-color)",
                                  "0 0 0 8px rgba(255, 165, 2, 0)",
                                  "0 0 0 0 var(--warning-color)",
                                ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                        {fleet.name}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.875rem",
                          color:
                            fleet.trend === "up"
                              ? "var(--accent-green)"
                              : "var(--error-color)",
                          fontWeight: "600",
                        }}
                      >
                        <CountUp
                          end={fleet.efficiency}
                          duration={1}
                          decimals={1}
                        />
                        %
                      </span>
                      <motion.div
                        animate={{
                          y: fleet.trend === "up" ? [-2, 2, -2] : [2, -2, 2],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {fleet.trend === "up" ? (
                          <TrendingUp size={12} color="var(--accent-green)" />
                        ) : (
                          <TrendingDown size={12} color="var(--error-color)" />
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            className="stat-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="stat-header">
              <div className="stat-title">Fleet Strategy</div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Zap size={16} color="var(--accent-green)" />
              </motion.div>
            </div>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ProgressCircle
                  percentage={stats.efficiency.value}
                  label={`${Math.round(stats.efficiency.value)}%`}
                  subtitle={stats.efficiency.subtitle}
                />
              </motion.div>
            </div>
            <motion.div
              style={{
                marginTop: "1rem",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                textAlign: "center",
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Optimal performance range: 85-95%
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Dashboard Grid */}
        <motion.div
          className="dashboard-grid"
          ref={ref}
          variants={containerVariants}
        >
          {/* Live Fleet Status Chart */}
          <motion.div
            className="card"
            style={{ gridColumn: "span 2" }}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="chart-header">
              <div>
                <h3 className="chart-title">Live Fleet Analytics</h3>
                <div
                  style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}
                >
                  <motion.div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "2px",
                        background: "var(--accent-green)",
                      }}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Active Routes
                    </span>
                  </motion.div>
                  <motion.div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "2px",
                        background: "var(--accent-green-light)",
                      }}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Standby Fleet
                    </span>
                  </motion.div>
                </div>
              </div>
              <div className="chart-controls">
                <motion.button
                  className="chart-btn active"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Real-time
                </motion.button>
                <motion.button
                  className="chart-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hourly
                </motion.button>
                <motion.button
                  className="chart-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Daily
                </motion.button>
              </div>
            </div>
            <LiveFleetChart />
          </motion.div>

          {/* Performance Analytics */}
          <motion.div
            className="card"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="chart-header">
              <h3 className="chart-title">Performance Analytics</h3>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Shield size={16} color="var(--accent-green)" />
              </motion.div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                {[
                  {
                    label: "Efficiency Rate",
                    value: 92,
                    color: "var(--accent-green)",
                  },
                  {
                    label: "Response Time",
                    value: 88,
                    color: "var(--info-color)",
                  },
                  {
                    label: "Fuel Economy",
                    value: 95,
                    color: "var(--success-color)",
                  },
                  {
                    label: "Route Optimization",
                    value: 85,
                    color: "var(--warning-color)",
                  },
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    style={{ marginBottom: "1rem" }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
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
                        {metric.label}
                      </span>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "600",
                          color: metric.color,
                        }}
                      >
                        <CountUp end={metric.value} duration={2} />%
                      </span>
                    </div>
                    <div
                      style={{
                        background: "var(--border-color)",
                        height: "6px",
                        borderRadius: "3px",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        style={{
                          background: `linear-gradient(90deg, ${metric.color}, ${metric.color}aa)`,
                          height: "100%",
                          borderRadius: "3px",
                        }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${metric.value}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="card"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="chart-header">
              <h3 className="chart-title">Quick Actions</h3>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Users size={16} color="var(--accent-green)" />
              </motion.div>
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                {
                  label: "Deploy New Route",
                  icon: "🚗",
                  color: "var(--accent-green)",
                },
                {
                  label: "Generate Report",
                  icon: "📊",
                  color: "var(--info-color)",
                },
                {
                  label: "Schedule Maintenance",
                  icon: "🔧",
                  color: "var(--warning-color)",
                },
                {
                  label: "Emergency Response",
                  icon: "🚨",
                  color: "var(--error-color)",
                },
              ].map((action, index) => (
                <motion.button
                  key={action.label}
                  style={{
                    background: "var(--secondary-bg)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    padding: "12px",
                    color: "var(--text-primary)",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: action.color,
                    backgroundColor: `${action.color}15`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{action.icon}</span>
                  {action.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default EmployeeDashboard;
