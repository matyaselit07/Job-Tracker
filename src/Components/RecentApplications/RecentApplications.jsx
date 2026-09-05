import { useState } from "react";
import "./RecentApplications.css";

const statuses = ["Applied", "Interview", "Offer", "Rejected"];

export default function RecentApplications({ applications, onDelete, onEdit }) {
  const [filter, setFilter] = useState("All");
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState(null);

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

  function startEditing(application) {
    setEditingId(application.id);
    setDraft({ ...application });
  }

  function updateDraft(field, value) {
    setDraft((currentDraft) => ({ ...currentDraft, [field]: value }));
  }

  function saveEdit() {
    onEdit(draft);
    setEditingId(null);
    setDraft(null);
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft(null);
  }

  function deleteEditingApplication() {
    onDelete(editingId);
    cancelEdit();
  }

  function ApplicationCard({ application }) {
    if (editingId === application.id) {
      return (
        <li className="editing-application">
          <input
            value={draft.company}
            onChange={(event) => updateDraft("company", event.target.value)}
            aria-label="Company"
          />
          <input
            value={draft.position}
            onChange={(event) => updateDraft("position", event.target.value)}
            aria-label="Position"
          />
          <input
            type="date"
            value={draft.date}
            onChange={(event) => updateDraft("date", event.target.value)}
            aria-label="Date"
          />
          <div className="application-edit-status">
            <select
              value={draft.status}
              onChange={(event) => updateDraft("status", event.target.value)}
              aria-label="Status"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <div className="application-edit-actions">
              <button type="button" onClick={saveEdit}>
                Save
              </button>
              <button type="button" onClick={cancelEdit}>
                Cancel
              </button>
              <button
                className="delete-button"
                type="button"
                onClick={deleteEditingApplication}
                aria-label={`Delete ${draft.company} application`}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      );
    }

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
            className="edit-button"
            type="button"
            onClick={() => startEditing(application)}
          >
            Edit
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
