import Link from "next/link";
import Paginate from "@/AdminComponent/Paginate";
export default function AdminOrders() {
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">Admin /</span> Orders
        </h4>
        <Link href={`/admin/orders/create`} className="btn btn-primary">
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path
                                fillRule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                              />
                            </svg>
                          </span>
                        </a>
                        <button className="btn btn-danger btn-custom ms-2 btnDelete">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash3"
                              viewBox="0 0 16 16"
                            >
                              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg>
                          </span>
                        </button>
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
