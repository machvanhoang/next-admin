import Link from "next/link";
import { SvgBack } from "@/AdminComponent/Svg";
import { getProductDetail } from "@/services/ProductServices";
import ProductEdit from "@/AdminComponent/Products/ProductEdit";
export default async function AdminProductDetail({
  params,
}: {
  params: { productId: number };
}) {
  const { productId } = params;
  const { product } = await getProductDetail(productId);
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">Admin / Products /</span> {product.name}
        </h4>
        <Link href={`/admin/products`} className="btn btn-secondary btn btn-add-back">
          <SvgBack />
          Go back
        </Link>
      </div>
      <ProductEdit productId={productId} product={product} />
    </>
  );
}
