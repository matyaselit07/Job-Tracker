import "./AnalyticsPage.css";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { initialApplications } from "../../data/applications";

const statusColors = {
  Applied: "rgb(12, 65, 138)",
  Interview: "rgb(127, 127, 1)",
  Offer: "green",
  Rejected: "rgb(183, 0, 0)",
};

export default function AnalyticsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const applicationsByDate = [...initialApplications]
    .sort((firstApplication, secondApplication) =>
      firstApplication.date.localeCompare(secondApplication.date),
    )
    .map((application, index) => ({
      ...application,
      applications: index + 1,
    }));

  const applicationsByStatus = Object.entries(
    initialApplications.reduce((statuses, application) => {
      statuses[application.status] = (statuses[application.status] || 0) + 1;
      return statuses;
    }, {}),
  ).map(([name, value]) => ({ name, value }));

  const tooltipStyle = {
    backgroundColor: "rgba(20, 20, 40, 0.95)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    color: "var(--color-primary)",
  };

  return (
    <div className="analytics-page-div">
      <h1>Application Analytics</h1>
      <div className="analytics-charts">
        <section className="analytics-chart-card">
          <h2>Applications by Status</h2>
          <ResponsiveContainer width="100%" height={360}>
            <PieChart>
              <Pie
                data={applicationsByStatus}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="45%"
                outerRadius={115}
                label={
                  isMobile ? false : ({ name, value }) => `${name}: ${value}`
                }
              >
                {applicationsByStatus.map((entry) => (
                  <Cell key={entry.name} fill={statusColors[entry.name]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <div className="mobile-status-summary">
            {applicationsByStatus.map(({ name, value }) => (
              <span key={name} style={{ color: statusColors[name] }}>
                {name}: {value}
              </span>
            ))}
          </div>
        </section>

        <section className="analytics-chart-card">
          <h2>Applications Over Time</h2>
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={applicationsByDate}>
              <CartesianGrid strokeDasharray="3 3" stroke="gray" />
              <XAxis
                dataKey="date"
                stroke="gray"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="gray" allowDecimals={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar
                dataKey="applications"
                fill="#7dd3fc"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>
    </div>
  );
}
