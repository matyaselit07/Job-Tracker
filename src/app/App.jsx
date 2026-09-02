import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import DashboardPage from "../pages/DashboardPage/DashboardPage";
import ApplicationsPage from "../pages/ApplicationsPage/ApplicationsPage";
import AnalyticsPage from "../pages/AnalyticsPage/AnalyticsPage";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
