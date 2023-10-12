import Link from "next/link";
export default function Logo({ stopEvent }: { stopEvent: any }) {
  return (
    <>
      <div className="app-brand demo">
        <Link href={`/admin`} className="app-brand-link app-logo">
          <img src="/assets/admin/images/logo_white.png" alt="Logo" />
        </Link>

        <a
          href="#"
          onClick={stopEvent}
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>
    </>
  );
}
