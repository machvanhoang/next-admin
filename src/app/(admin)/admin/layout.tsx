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
import { AdminProvider } from "@/context/AdminContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Script from "next/script";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <AdminProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AdminProvider>
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
