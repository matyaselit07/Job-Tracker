import "./AnalyticsPage.css";

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
  Applied: "#7dd3fc",
  Interview: "#c4b5fd",
  Offer: "#86efac",
  Rejected: "#fca5a5",
};

export default function AnalyticsPage() {
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
                label={({ name, value }) => `${name}: ${value}`}
              >
                {applicationsByStatus.map((entry) => (
                  <Cell key={entry.name} fill={statusColors[entry.name]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
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
