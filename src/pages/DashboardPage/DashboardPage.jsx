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
  const [totalApplications, setTotalApplications] = useState(
    initialApplications.length,
  );
  const [interviews, setInterviews] = useState(
    initialApplications.filter((item) => item.status === "Interview").length,
  );
  const [offers, setOffers] = useState(
    initialApplications.filter((item) => item.status === "Offer").length,
  );

  function updateStatusCounts(status) {
    if (status === "Interview") {
      setInterviews((prev) => prev + 1);
    }
    if (status === "Offer") {
      setOffers((prev) => prev + 1);
    }
  }

  function updateTotals(application) {
    setTotalApplications((prev) => prev + 1);
    updateStatusCounts(application.status);
  }

  function handleAddApplication(application) {
    setApplications((prev) => [
      ...prev,
      {
        ...application,
        id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 0,
      },
    ]);
    updateTotals(application);
  }

  return (
    <div>
      <Summary
        onAddApplication={handleAddApplication}
        totalApplications={totalApplications}
        interviews={interviews}
        offers={offers}
      />
      <RecentApplications applications={applications} />
    </div>
  );
}
