import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import DashboardPage from "../pages/DashboardPage/DashboardPage";
import ApplicationsPage from "../pages/ApplicationsPage/ApplicationsPage";
import AnalyticsPage from "../pages/AnalyticsPage/AnalyticsPage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AnalyticsPage />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
