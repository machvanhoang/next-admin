import Link from "next/link";
import Paginate from "@/AdminComponent/Paginate";
import { formatPrice } from "@/helpers";
import { SvgPlus, SvgEdit, SvgTrash } from "@/AdminComponent/Svg";
import { getProducts } from "@/services/ProductServices"
import { notFound } from "next/navigation";
export default async function AdminProduct({ searchParams }: { searchParams: { page: number } }) {
  const { page } = searchParams;
  const { success, products } = await getProducts(page);
  if (!success) {
    return notFound();
  }
  const { links, data, meta } = products;
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">Admin /</span> Products
        </h4>
        <Link
          href={`/admin/products/create`}
          className="btn btn-primary btn-add-back"
        >
          <SvgPlus />
          Add product
        </Link>
      </div>
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card">
            <h5 className="card-header">List of Products</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead className="table">
                  <tr>
                    <th>#No</th>
                    <th>Name</th>
                    <th>Regular price</th>
                    <th>Sale price</th>
                    <th>Inventory</th>
                    <th>Variants</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {data &&
                    data.length > 0 &&
                    data.map((product: any) => {
                      const productId = product.id;
                      return (
                        <tr key={productId}>
                          <td>{productId}</td>
                          <td>
                            <Link
                              className="strong-name"
                              href={`/admin/products/${productId}`}
                            >
                              <strong>{product.name}</strong>
                            </Link>
                          </td>
                          <td>
                            {formatPrice(product.regularPrice)}
                            <sup>đ</sup>
                          </td>
                          <td>
                            {formatPrice(product.salePrice)}
                            <sup>đ</sup>
                          </td>
                          <td>{formatPrice(product.inventory)}</td>
                          <td>
                            <Link
                              href={`/admin/products/${productId}/variants`}
                              className="btn btn-custom btn-warning"
                            >
                              <small>Variants</small>
                            </Link>
                          </td>
                          <td>{product.dateCreate}</td>
                          <td>{product.dateUpdate}</td>
                          <td>
                            <span className={`badge badge-published ${product.status}`}>
                              {product.status}
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <Link
                                className="btn btn-secondary btn-custom"
                                href={`/admin/products/${productId}`}
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
          <div className="d-flex justify-content-center mt-3">
            <Paginate links={links} current_page={meta.current_page} />
          </div>
        </div>
      </div>
    </>
  );
}
