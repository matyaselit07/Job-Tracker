import { useState } from "react";
import "./Header.css";

export default function Header({ onNavigate, activePage }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const logo = "./src/assets/logo.png";
  const bell = "./src/assets/bell.svg";
  const user = "./src/assets/user.svg";

  const navItems = [
    { label: "Dashboard", page: "dashboard" },
    { label: "Applications", page: "applications" },
    { label: "Analytics", page: "analytics" },
  ];

  function handleNavigate(page) {
    if (typeof onNavigate === "function") onNavigate(page);
    setIsNavOpen(false);
  }

  return (
    <header className="header-sections">
      <section className="section section-left">
        <img src={logo} alt="logo.png" />
        <h2 className="section-title">JobTracker</h2>
      </section>

      <button
        className={`hamburger-button ${isNavOpen ? "open" : ""}`}
        type="button"
        onClick={() => setIsNavOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {/* Hamburger-bar */}
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`section section-middle ${isNavOpen ? "mobile-open" : ""}`}
      >
        {navItems.map((item) => (
          <div
            key={item.page}
            className="section-middle-div"
            onClick={() => handleNavigate(item.page)}
            style={{
              fontWeight: activePage === item.page ? "bold" : "normal",
              backgroundColor: activePage === item.page ? "whitesmoke" : "",
            }}
          >
            {item.label}
          </div>
        ))}
      </nav>

      <section className="section section-right">
        <img className="bell-img" src={bell} alt="bell.svg" />
        <img className="user-img" src={user} alt="user.svg" />
      </section>
    </header>
  );
}
