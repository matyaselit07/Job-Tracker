import { useState } from "react";
import "./Summary.css";

export default function Summary({
  onAddApplication,
  totalApplications,
  interviews,
  offers,
}) {
  const [showForm, setShowForm] = useState(false);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Applied");

  const successRate = ((offers / totalApplications) * 100).toFixed(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!company || !position || !date || !status) {
      return;
    }

    onAddApplication({ company, position, date, status });
    // Clear intakes
    setCompany("");
    setPosition("");
    setDate("");
    setStatus("Applied");
    setShowForm(false);
  }

  return (
    <div className="summary">
      <div className="summary-container">
        <section className="summary-section-left">
          <h1>Welcome Back!</h1>
          <p className="summary-text">
            Here is your application dashboard for today.
          </p>
        </section>
        <section className="summary-section-right">
          <button
            className="summary-button"
            type="button"
            onClick={() => setShowForm((prev) => !prev)}
          >
            + Add New Application
          </button>
        </section>
      </div>

      {showForm && (
        <form className="summary-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
          <button className="summary-submit" type="submit">
            Add Application
          </button>
        </form>
      )}

      <div className="summary-container">
        <div className="summary-container-statistics">
          Total Applications <p>{totalApplications}</p>
        </div>
        <div className="summary-container-statistics">
          Interviews <p>{interviews}</p>
        </div>
        <div className="summary-container-statistics">
          Offers Recieved <p>{offers}</p>
        </div>
        <div className="summary-container-statistics">
          Success Rate <p>{successRate}%</p>
        </div>
      </div>
    </div>
  );
}
