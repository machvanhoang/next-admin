import Link from "next/link";
import { SvgBack } from "@/AdminComponent/Svg";
import ProductCreate from "@/AdminComponent/Products/ProductCreate";
export default function AdminProductsVariantsCreate({
  params,
}: {
  params: { productId: number };
}) {
  const { productId } = params;
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">
            Admin / Product / Variants /
          </span>{" "}
          Detail
        </h4>
        <Link
          href={`/admin/products/${productId}/variants`}
          className="btn btn-secondary btn-add-back"
        >
          <SvgBack />
          Go back variants
        </Link>
      </div>
      <ProductCreate />
    </>
  );
}
