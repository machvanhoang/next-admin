import Link from "next/link";
import Paginate from "@/AdminComponent/Paginate";
import { formatPrice } from "@/helpers";
import { fetchAdmin } from "@/lib/fetch";
import { SvgPlus, SvgEdit, SvgTrash } from "@/AdminComponent/Svg";
async function getProducts() {
  const res = await fetchAdmin("http://localhost:3000/products.json");
  return await res.json();
}
export default async function AdminProduct() {
  const products = await getProducts();
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
                    <th>Updated_at</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {products &&
                    products.length &&
                    products.map((product: any, key: number) => {
                      return (
                        <tr key={key}>
                          <td>1</td>
                          <td>
                            <Link
                              className="strong-name"
                              href={`/admin/products/${key}`}
                            >
                              <strong>{product.name}</strong>
                            </Link>
                          </td>
                          <td>
                            {formatPrice(product.regular_price)}
                            <sup>đ</sup>
                          </td>
                          <td>
                            {formatPrice(product.sale_price)}
                            <sup>đ</sup>
                          </td>
                          <td>{formatPrice(product.inventory)}</td>
                          <td>
                            <Link
                              href={`/admin/products/${key}/variants`}
                              className="btn btn-custom btn-warning"
                            >
                              <small>Variants</small>
                            </Link>
                          </td>
                          <td>2023-10-10 10h20</td>
                          <td>2023-10-10 10h20</td>
                          <td>
                            <span className="badge badge-published">
                              Published
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <Link
                                className="btn btn-secondary btn-custom"
                                href={`/admin/products/${key}`}
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
            <Paginate />
          </div>
        </div>
      </div>
    </>
  );
}
