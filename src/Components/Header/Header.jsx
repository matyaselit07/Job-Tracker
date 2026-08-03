import "./Header.css";

export default function Header() {
  const logo = "./src/assets/logo.png";
  const bell = "./src/assets/bell.svg";
  const user = "./src/assets/user.svg";

  return (
    <header className="header-sections">
      <section className="section section-left">
        <img src={logo} alt="logo.png" />
        <h2 className="section-title">JobTracker</h2>
      </section>
      <section className="section section-middle">
        <div className="section-middle-div">Dashboard</div>
        <div className="section-middle-div">Applications</div>
        <div className="section-middle-div">Analytics</div>
      </section>
      <section className="section section-right">
        <img className="bell-img" src={bell} alt="bell.svg" />
        <img src={user} alt="user.svg" />
      </section>
    </header>
  );
}
