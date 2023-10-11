import "@/styles/admin/fonts/boxicons.css";
import "@/styles/admin/css/core.css";
import "@/styles/admin/css/theme-default.css";
import "@/styles/admin/css/demo.css";
import "@/styles/admin/css/app.css";
import "@/styles/admin/css/perfect-scrollbar.css";
import "@/styles/admin/css/apex-charts.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin",
};
import Script from "next/script";
import Support from "../_components/Support";
import Aside from "../_components/Aside";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <div className="layout-wrapper layout-content-navbar">
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
        <Script src="/assets/admin/js/helpers.js"></Script>
        <Script src="/assets/admin/js/config.js"></Script>
        <Script src="/assets/admin/js/jquery.js"></Script>
        <Script src="/assets/admin/js/popper.js"></Script>
        <Script src="/assets/admin/js/bootstrap.js"></Script>
        <Script src="/assets/admin/js/perfect-scrollbar.js"></Script>
        <Script src="/assets/admin/js/menu.js"></Script>
        <Script src="/assets/admin/js/apexcharts.js"></Script>
        <Script src="/assets/admin/js/main.js"></Script>
        <Script src="/assets/admin/js/dashboards-analytics.js"></Script>
      </body>
    </html>
  );
}
