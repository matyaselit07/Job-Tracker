import { useState } from "react";
import "./Header.css";

import logo from "../../assets/logo.png";
import bell from "../../assets/bell.svg";
import user from "../../assets/user.svg";

export default function Header({ onNavigate, activePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", page: "dashboard" },
    { label: "Applications", page: "applications" },
    { label: "Analytics", page: "analytics" },
  ];

  return (
    <header className="header-sections">
      <section className="section section-left">
        <img src={logo} alt="logo.png" />
        <h2 className="section-title">JobTracker</h2>
      </section>

      <button
        type="button"
        className={`hamburger-button ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <section
        className={`section section-middle ${isMenuOpen ? "mobile-open" : ""}`}
      >
        {navItems.map((item) => (
          <div
            key={item.page}
            className="section-middle-div"
            onClick={() => {
              onNavigate(item.page);
              setIsMenuOpen(false);
            }}
            style={{
              fontWeight: activePage === item.page ? "bold" : "",
              backgroundColor: activePage === item.page ? "whitesmoke" : "",
            }}
          >
            {item.label}
          </div>
        ))}
      </section>
      <section className="section section-right">
        <img className="bell-img" src={bell} alt="bell.svg" />
        <img src={user} alt="user.svg" />
      </section>
    </header>
  );
}
