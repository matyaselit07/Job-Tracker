import "./Header.css";

export default function Header({ onNavigate, activePage }) {
  const logo = "./src/assets/logo.png";
  const bell = "./src/assets/bell.svg";
  const user = "./src/assets/user.svg";

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
      <section className="section section-middle">
        {navItems.map((item) => (
          <div
            key={item.page}
            className="section-middle-div"
            onClick={() => onNavigate(item.page)}
            style={{
              fontWeight: activePage === item.page ? "bold" : "normal",
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
