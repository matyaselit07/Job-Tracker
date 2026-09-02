import "./DashboardPage.css";

import { useState } from "react";
import Summary from "../../Components/Summary/Summary";
import RecentApplications from "../../Components/RecentApplications/RecentApplications";
import { initialApplications } from "../../data/applications";

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
