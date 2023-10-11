"use client";
import Link from "next/link";
export default function Aside() {
  const stopEvent = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <a href="index.html" className="app-brand-link">
            <img
              src="/assets/admin/images/logo_white.png"
              alt="Logo"
              style={{
                maxWidth: "150px",
                height: "auto",
              }}
            />
          </a>

          <a
            href="#"
            onClick={stopEvent}
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          <li className="menu-item active open">
            <a href="#" onClick={stopEvent} className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Dashboards">Dashboards</div>
            </a>
          </li>
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Apps &amp; Pages</span>
          </li>
          <li className="menu-item">
            <Link href={`/admin/products`} className="menu-link">
              <i className="menu-icon tf-icons bx bx-envelope"></i>
              <div data-i18n="Email">Products</div>
            </Link>
          </li>
          <li className="menu-item">
            <a
              href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-email.html"
              target="_blank"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bx-envelope"></i>
              <div data-i18n="Email">Email</div>
              <div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">
                Pro
              </div>
            </a>
          </li>
          <li className="menu-item">
            <a href="#" onClick={stopEvent} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-layout"></i>
              <div data-i18n="Layouts">Layouts</div>
            </a>

            <ul className="menu-sub">
              <li className="menu-item">
                <a href="layouts-without-menu.html" className="menu-link">
                  <div data-i18n="Without menu">Without menu</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-without-navbar.html" className="menu-link">
                  <div data-i18n="Without navbar">Without navbar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-container.html" className="menu-link">
                  <div data-i18n="Container">Container</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-fluid.html" className="menu-link">
                  <div data-i18n="Fluid">Fluid</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-blank.html" className="menu-link">
                  <div data-i18n="Blank">Blank</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}
