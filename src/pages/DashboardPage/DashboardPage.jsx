import "./DashboardPage.css";

import { useState } from "react";
import Summary from "../../Components/Summary/Summary";
import RecentApplications from "../../Components/RecentApplications/RecentApplications";

const initialApplications = [
  {
    id: 0,
    company: "TechCrop",
    position: "Software Engineer",
    date: "2026-06-14",
    status: "Applied",
  },
  {
    id: 1,
    company: "Innovate Solutions",
    position: "Product Manager",
    date: "2026-06-30",
    status: "Interview",
  },
  {
    id: 2,
    company: "Global Dynamics",
    position: "Data Engineer",
    date: "2026-07-02",
    status: "Offer",
  },
  {
    id: 3,
    company: "FutureTech",
    position: "Data Analyst",
    date: "2026-07-23",
    status: "Rejected",
  },
  {
    id: 4,
    company: "TechCrop",
    position: "UX Designer",
    date: "2026-07-30",
    status: "Applied",
  },
];

export default function DashboardPage() {
  const [applications, setApplications] = useState(initialApplications);

  const totalApplications = applications.length;

  const interviews = applications.filter(
    (application) => application.status === "Interview",
  ).length;

  const offers = applications.filter(
    (application) => application.status === "Offer",
  ).length;

  function handleAddApplication(application) {
    setApplications((prev) => [
      ...prev,
      {
        ...application,
        id: Date.now(),
      },
    ]);
  }

  function handleDelete(id) {
    setApplications((prevApplications) =>
      prevApplications.filter((application) => application.id !== id),
    );
  }

  return (
    <div className="dashboard-page-div">
      <Summary
        onAddApplication={handleAddApplication}
        totalApplications={totalApplications}
        interviews={interviews}
        offers={offers}
      />

      <RecentApplications applications={applications} onDelete={handleDelete} />
    </div>
  );
}
