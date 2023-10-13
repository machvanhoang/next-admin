"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
export default function Aside() {
  const stopEvent = (e: any) => {
    e.preventDefault();
  };
  const currentPath = usePathname();
  const activeMenu = (path: string) => {
    if (currentPath.startsWith(path)) {
      return "active";
    }
    return "";
  };
  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <Logo stopEvent={stopEvent} />
        <div className="menu-inner-shadow"></div>
        <ul className="menu-inner py-1">
          <li
            className={`menu-item ${currentPath === "/admin" ? "active" : ""}`}
          >
            <Link href={`/admin`} className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Home">Home</div>
            </Link>
          </li>
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Application</span>
          </li>
          <li className={`menu-item ${activeMenu("/admin/orders")}`}>
            <Link href={`/admin/orders`} className="menu-link">
              <i className="menu-icon tf-icons bx bx-shopping-bag"></i>
              <div data-i18n="Orders">Orders</div>
            </Link>
          </li>
          <li className={`menu-item ${activeMenu("/admin/products")}`}>
            <Link href={`/admin/products`} className="menu-link">
              <i className="menu-icon tf-icons bx bxl-product-hunt"></i>
              <div data-i18n="Products">Products</div>
            </Link>
          </li>
          <li className={`menu-item ${activeMenu("/admin/customers")}`}>
            <Link href={`/admin/customers`} className="menu-link">
              <i className="menu-icon tf-icons bx bx-user"></i>
              <div data-i18n="Customers">Customers</div>
            </Link>
          </li>
          <li className={`menu-item ${activeMenu("/admin/posts")}`}>
            <a href="#" onClick={stopEvent} className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-news"></i>
              <div data-i18n="Posts">Posts</div>
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
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">General</span>
          </li>
          <li className={`menu-item ${activeMenu("/admin/settings")}`}>
            <Link href={`/admin/settings`} className="menu-link">
              <i className="menu-icon tf-icons bx bx-cog"></i>
              <div data-i18n="Email">Settings</div>
            </Link>
          </li>
          <li className={`menu-item ${activeMenu("/admin/payment-method")}`}>
            <Link href={`/admin/payment-method`} className="menu-link">
              <i className="menu-icon tf-icons bx bxl-paypal"></i>
              <div data-i18n="Email">Payment method</div>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
