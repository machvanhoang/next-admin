import Link from "next/link";
import Paginate from "@/AdminComponent/Paginate";
import { SvgPlus, SvgEdit, SvgTrash } from "@/AdminComponent/Svg";
import { notFound } from "next/navigation";
import { getCustomers } from "@/services/CustomerService";
export default async function AdminCustomers({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const { page } = searchParams;
  const { success, customers } = await getCustomers(page);
  if (!success) {
    return notFound();
  }
  const { links, data, meta } = customers;
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">Admin /</span> Customers
        </h4>
        <Link
          href={`/admin/customers/create`}
          className="btn btn-primary btn-add-back"
        >
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
                  {data?.map((customer: any) => {
                    return (
                      <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>
                          <Link
                            className="strong-name"
                            href={`/admin/customers/${customer.id}`}
                          >
                            <strong>{customer.full_name}</strong>
                          </Link>
                        </td>
                        <td>{customer.username}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{new Date().toDateString()}</td>
                        <td>{new Date().toDateString()}</td>
                        <td>
                          <span
                            className={`badge badge-${customer.status?.class}`}
                          >
                            {customer.status?.name}
                          </span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <Link
                              className="btn btn-secondary btn-custom"
                              href={`/admin/customers/${customer.id}`}
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
            <Paginate
              links={links}
              url={`/admin/customers`}
              current_page={meta.current_page}
            />
          </div>
        </div>
      </div>
    </>
  );
}
