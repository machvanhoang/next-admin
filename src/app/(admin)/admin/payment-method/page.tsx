import Link from "next/link";
import { SvgBack, SvgEdit, SvgTrash } from "@/AdminComponent/Svg";
export default function PaymentMethod() {
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">Admin / </span> Payment method
        </h4>
        <Link href={`/admin`} className="btn btn-secondary btn-add-back">
          <SvgBack />
          Go back
        </Link>
      </div>
      <div className="row mb-4">
        <div className="col-md-12 mb-4">
          <form action="" role="form" id="formSubmit" method="POST">
            <div className="card mb-4">
              <hr className="my-0" />
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        placeholder=""
                        autoFocus={true}
                        defaultValue=""
                      />
                      <div className="admin_error_field_message w-100">
                        <p className="text-danger m-0">Name</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        name="description"
                        id="description"
                        cols={30}
                        rows={8}
                      ></textarea>
                      <div className="admin_error_field_message w-100">
                        <p className="text-danger m-0">Feedback</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <button type="submit" className="btn btn-primary me-2">
                    Save
                  </button>
                  <button type="reset" className="btn btn-outline-secondary">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-12">
          <div className="card">
            <h5 className="card-header">List of payment method</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead className="table">
                  <tr>
                    <th>#No</th>
                    <th>Name</th>
                    <th>Created at</th>
                    <th>Updated_at</th>
                    <th>
                      <div className="d-flex justify-content-center align-items-center">
                        Actions
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  <tr>
                    <td>1</td>
                    <td>
                      <a href="">
                        <strong>COD</strong>
                      </a>
                    </td>
                    <td>2023-10-10 10:00</td>
                    <td>2023-10-10 10:00</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <a className="btn btn-secondary btn-custom" href="">
                          <span>
                            <SvgEdit />
                          </span>
                        </a>
                        <button className="btn btn-danger btn-custom btnDelete ms-1">
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
        </div>
      </div>
    </>
  );
}
