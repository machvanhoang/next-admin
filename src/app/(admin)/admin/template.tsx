"use client";
import { useTheme } from "@/context/ThemeContext";
import Support from "../_components/Support";
import Aside from "../_components/Aside";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
export default function AdminTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <>
      <div className="layout-wrapper layout-content-navbar" id={`theme-${theme}`}>
        <div className="layout-container">
          <Aside />
          <div className="layout-page">
            <Navbar />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                {children}
              </div>
              <Footer />
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
      <Support />
    </>
  );
}
