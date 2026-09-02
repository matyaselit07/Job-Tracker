import "./AnalyticsPage.css";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { initialApplications } from "../../data/applications";

export default function AnalyticsPage() {
  const chartData = [...initialApplications]
    .sort((firstApplication, secondApplication) =>
      firstApplication.date.localeCompare(secondApplication.date),
    )
    .map((application, index) => ({
      ...application,
      applications: index + 1,
    }));

  return (
    <div className="analytics-page-div">
      <h1>Applications Over Time</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="gray" />

          <XAxis dataKey="date" stroke="gray" style={{ fontSize: "12px" }} />
          <YAxis
            stroke="gray"
            style={{ fontSize: "12px" }}
            domain={["auto", "auto"]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(20, 20, 40, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              color: "var(--color-primary)",
            }}
          />
          <Line
            type="monotone"
            dataKey="applications"
            stroke="gray"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
