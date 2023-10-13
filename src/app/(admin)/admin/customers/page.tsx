import Link from "next/link";
import Paginate from "@/AdminComponent/Paginate";
import { SvgPlus, SvgEdit, SvgTrash } from "@/AdminComponent/Svg";
export default function AdminCustomers() {
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">Admin /</span> Customers
        </h4>
        <Link href={`/admin/customers/create`} className="btn btn-primary btn-add-back">
          <SvgPlus />
          Add customer
        </Link>
      </div>
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card">
            <h5 className="card-header">List of Customers</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead className="table">
                  <tr>
                    <th>#No</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
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
                      <a
                        className="strong-name"
                        href="{{ route('admin.customer.edit', $customer) }}"
                      >
                        <strong>David Mach</strong>
                      </a>
                    </td>
                    <td>username01</td>
                    <td>hoangmach.website@gmail.com</td>
                    <td>0969 874 264</td>
                    <td>2023-10-10 10h00</td>
                    <td>2023-10-10 10h00</td>
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
                        <button className="btn btn-danger btn-custom ms-2 btnDelete">
                          <span>
                            <SvgTrash />
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
