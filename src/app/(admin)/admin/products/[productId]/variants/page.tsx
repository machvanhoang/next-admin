import Link from "next/link";
import { SvgEdit, SvgTrash, SvgBack } from "@/AdminComponent/Svg";
import { getProductVariants } from "@/services/ProductServices";
import { formatPrice } from "@/helpers";
import VariantCreate from "@/AdminComponent/Products/VariantCreate";
export default async function AdminProductVariants({
  params,
}: {
  params: { productId: number };
}) {
  const { productId } = params;
  const { variants } = await getProductVariants(productId);
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">Admin / Products /</span>{" "}
          Variants
        </h4>
        <Link
          href={`/admin/products/${productId}`}
          className="btn btn-secondary btn btn-add-back"
        >
          <SvgBack />
          Go back product
        </Link>
      </div>
      <div className="row mb-4">
        <div className="col-md-12">
          <VariantCreate productId={productId} />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card">
            <h5 className="card-header">List of Variants</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead className="table">
                  <tr>
                    <th>#No</th>
                    <th>Name</th>
                    <th>Regular price</th>
                    <th>Sale price</th>
                    <th>Inventory</th>
                    <th>Created at</th>
                    <th>Updated_at</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {variants &&
                    variants.length > 0 &&
                    variants.map((variant: any) => {
                      return (
                        <tr key={variant.id}>
                          <td>{variant.id}</td>
                          <td>
                            <a className="strong-name" href="">
                              <strong>{variant.name}</strong>
                            </a>
                          </td>
                          <td>
                            {formatPrice(variant.regular_price)}
                            <sup>đ</sup>
                          </td>
                          <td>
                            {formatPrice(variant.sale_price)}
                            <sup>đ</sup>
                          </td>
                          <td>{formatPrice(variant.inventory)}</td>
                          <td>{variant.created_at}</td>
                          <td>{variant.updated_at}</td>
                          <td>
                            <span className={`badge badge-${variant.status}`}>
                              {variant.status}
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <Link
                                className="btn btn-secondary btn-custom"
                                href={`/admin/products/${productId}/variants/${variant.id}`}
                              >
                                <span>
                                  <SvgEdit />
                                </span>
                              </Link>
                              <button className="btn btn-danger btn-custom ms-2 btnDelete">
                                <span>
                                  <SvgTrash />
                                </span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
