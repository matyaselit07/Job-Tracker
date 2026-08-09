import { useState } from "react";
import "./RecentApplications.css";

export default function RecentApplications({ applications, onDelete }) {
  const [filter, setFilter] = useState("All");

  function getStatusClass(status) {
    switch (status) {
      case "Rejected":
        return "status-pill rejected";
      case "Applied":
        return "status-pill applied";
      case "Interview":
        return "status-pill interview";
      case "Offer":
        return "status-pill offer";
      default:
        return "status-pill";
    }
  }

  function ApplicationCard({ application }) {
    return (
      <li>
        <h3>{application.company}</h3>
        <p>{application.position}</p>
        <p>{application.date}</p>
        <div>
          <p className={getStatusClass(application.status)}>
            {application.status}
          </p>
          <button
            className="delete-button"
            onClick={() => onDelete(application.id)}
            aria-label={`Delete ${application.company} application`}
          >
            X
          </button>
        </div>
      </li>
    );
  }

  const filteredApplications =
    filter === "All"
      ? applications
      : applications.filter((application) => application.status === filter);

  return (
    <div className="application">
      <section className="section-top">
        <h1>Recent Applications</h1>
        <div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Statuses</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </section>
      <section className="section-center">
        <p>COMPANY</p>
        <p>POSITION</p>
        <p>DATE</p>
        <p className="section-center-status">STATUS</p>
      </section>
      <section className="section-bottom">
        <ul className="section-bottom-list">
          {filteredApplications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </ul>
      </section>
    </div>
  );
}
