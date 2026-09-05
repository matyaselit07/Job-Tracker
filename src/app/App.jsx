import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import "./App.css";

const DashboardPage = lazy(
  () => import("../pages/DashboardPage/DashboardPage"),
);
const AnalyticsPage = lazy(
  () => import("../pages/AnalyticsPage/AnalyticsPage"),
);

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />

      <Suspense
        fallback={
          <main className="loading">
            <h2>Loading...</h2>
            <p className="loading-animation"></p>
          </main>
        }
      >
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}
