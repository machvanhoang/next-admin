import Link from "next/link";
import { SvgBack } from "@/AdminComponent/Svg";
import { getVariantByProduct } from "@/services/ProductServices";
import VariantUpdate from "@/app/(admin)/_components/Products/VariantUpdate";
export default async function AdminProductsVariantsDetail({
  params,
}: {
  params: { productId: number; variantId: number };
}) {
  const { productId, variantId } = params;
  const { variant, product } = await getVariantByProduct(productId, variantId);
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
      <VariantUpdate variant={variant} product={product} productId={productId} />
    </>
  );
}
