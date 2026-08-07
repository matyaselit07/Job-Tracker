import { useState } from "react";
import "./App.css";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import ApplicationsPage from "../pages/ApplicationsPage/ApplicationsPage";
import AnalyticsPage from "../pages/AnalyticsPage/AnalyticsPage";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "applications":
        return <ApplicationsPage />;
      case "analytics":
        return <AnalyticsPage />;
      case "dashboard":
      default:
        return <DashboardPage />;
    }
  };

  return (
    <>
      <Header onNavigate={setActivePage} activePage={activePage} />
      {renderPage()}
      <Footer/>
    </>
  );
}

export default App;
