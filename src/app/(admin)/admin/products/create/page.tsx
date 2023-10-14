import Link from "next/link";
import { SvgBack } from "@/AdminComponent/Svg";
import ProductCreate from "@/AdminComponent/Products/ProductCreate";
export default function AdminProductCreate() {
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">Admin / Product /</span> Create
        </h4>
        <Link
          href={`/admin/products`}
          className="btn btn-secondary btn-add-back"
        >
          <SvgBack />
          Go back
        </Link>
      </div>
      <ProductCreate />
    </>
  );
}
