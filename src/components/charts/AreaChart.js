import React from "react";

const AreaChart = ({
  data,
  color = "var(--accent-green)",
  height = 200,
  formatValue = (value) => value.toString(),
}) => {
  if (!data || data.length === 0) return null;

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const valueRange = maxValue - minValue || 1;

  const width = 400;
  const padding = 40;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  // Create path for the area
  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * chartWidth;
    const y =
      padding + chartHeight - ((d.value - minValue) / valueRange) * chartHeight;
    return { x, y, ...d };
  });

  const pathData = points.reduce((path, point, i) => {
    if (i === 0) {
      return `M ${point.x} ${height - padding} L ${point.x} ${point.y}`;
    }
    return `${path} L ${point.x} ${point.y}`;
  }, "");

  const closedPath = `${pathData} L ${points[points.length - 1].x} ${
    height - padding
  } Z`;

  return (
    <div style={{ width: "100%", height: `${height}px` }}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Grid lines */}
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding}
            y1={padding + ratio * chartHeight}
            x2={width - padding}
            y2={padding + ratio * chartHeight}
            stroke="var(--border-color)"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        ))}

        {/* Area */}
        <path d={closedPath} fill="url(#areaGradient)" />

        {/* Line */}
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {points.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill={color}
            stroke="var(--card-bg)"
            strokeWidth="2"
          />
        ))}

        {/* X-axis labels */}
        {points.map((point, i) => (
          <text
            key={i}
            x={point.x}
            y={height - 10}
            textAnchor="middle"
            fontSize="12"
            fill="var(--text-muted)"
          >
            {point.time}
          </text>
        ))}

        {/* Y-axis labels */}
        {[0, 0.5, 1].map((ratio, i) => {
          const value = minValue + ratio * valueRange;
          return (
            <text
              key={i}
              x={10}
              y={padding + (1 - ratio) * chartHeight + 4}
              fontSize="12"
              fill="var(--text-muted)"
            >
              {formatValue(value)}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default AreaChart;
