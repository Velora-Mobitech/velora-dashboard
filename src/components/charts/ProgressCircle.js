import React from "react";

const ProgressCircle = ({
  percentage,
  label,
  subtitle,
  size = 120,
  color = "var(--accent-green)",
}) => {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-circle" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--border-color)"
          strokeWidth="8"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      <div className="progress-text">
        <div
          className="progress-value"
          style={{ fontSize: size > 100 ? "1.5rem" : "1.25rem" }}
        >
          {label}
        </div>
        {subtitle && (
          <div
            className="progress-label"
            style={{ fontSize: size > 100 ? "0.75rem" : "0.625rem" }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressCircle;
