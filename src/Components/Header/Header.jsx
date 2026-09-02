import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.css";

import logo from "../../assets/logo.png";
import bell from "../../assets/bell.svg";
import user from "../../assets/user.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Applications", path: "/applications" },
    { label: "Analytics", path: "/analytics" },
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
            key={item.path}
            className="section-middle-div"
            onClick={() => {
              navigate(item.path);
              setIsMenuOpen(false);
            }}
            style={{
              fontWeight: location.pathname === item.path ? "bold" : "",
              backgroundColor:
                location.pathname === item.path ? "whitesmoke" : "",
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
