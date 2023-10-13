import Link from "next/link";
import Paginate from "@/AdminComponent/Paginate";
import { SvgEdit, SvgPlus } from "@/AdminComponent/Svg";
export default function AdminOrders() {
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">Admin /</span> Orders
        </h4>
        <Link
          href={`/admin/orders/create`}
          className="btn btn-primary btn-add-back"
        >
          <SvgPlus />
          Create order
        </Link>
      </div>
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card">
            <h5 className="card-header">List of Orders</h5>
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
                  <tr>
                    <td>1</td>
                    <td>
                      <a className="strong-name" href="">
                        <strong>Product 01</strong>
                      </a>
                    </td>
                    <td>
                      1.000.000<sup>đ</sup>
                    </td>
                    <td>
                      1.000.000<sup>đ</sup>
                    </td>
                    <td>1.000</td>
                    <td>2023-10-10 10h20</td>
                    <td>2023-10-10 10h20</td>
                    <td>
                      <span className="badge badge-published">Published</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <a className="btn btn-secondary btn-custom" href="">
                          <span>
                            <SvgEdit />
                          </span>
                        </a>
                      </div>
                    </td>
                  </tr>
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
