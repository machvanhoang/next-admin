import Link from "next/link";
import { SvgBack } from "@/AdminComponent/Svg";
export default function AdminCustomersCreate() {
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">Admin / Customer /</span> Create
        </h4>
        <Link
          href={`/admin/customers`}
          className="btn btn-secondary btn-add-back"
        >
          <SvgBack />
          Go back
        </Link>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <h5 className="card-header border-bottom">Customer create</h5>
            <form action="" method="POST" role="form">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="full_name" className="form-label">
                    Fullname
                  </label>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    name="full_name"
                    defaultValue=""
                    id="full_name"
                    placeholder="David Mach"
                  />
                  <div className="invalid-feedback">Feedback</div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        className="form-control is-invalid"
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        defaultValue=""
                      />
                      <div className="invalid-feedback">Feedback</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control is-invalid"
                          name="email"
                          defaultValue=""
                          id="email"
                          placeholder="name@example.com"
                        />
                        <div className="invalid-feedback">Feedback</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    className="form-control is-invalid "
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    defaultValue=""
                  />
                  <div className="invalid-feedback">Feedback</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control is-invalid "
                    name="password"
                    defaultValue=""
                    id="password"
                    placeholder="******"
                  />
                  <div className="invalid-feedback">Feedback</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="confirm_password" className="form-label">
                    New password
                  </label>
                  <input
                    type="password"
                    className="form-control is-invalid"
                    name="confirm_password"
                    defaultValue=""
                    id="confirm_password"
                    placeholder="******"
                  />
                  <div className="invalid-feedback">Feedback</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="customer_status_id" className="form-label">
                    Status
                  </label>
                  <select
                    className="form-select is-invalid"
                    name="customer_status_id"
                    id="customer_status_id"
                  >
                    <option defaultValue="">Choice status</option>
                    <option value="1">Published</option>
                  </select>
                  <div className="invalid-feedback">Feedback</div>
                </div>
              </div>
              <div className="card-footer border-top">
                <div className="d-flex justify-content-start">
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                  <button type="reset" className="btn btn-secondary ms-3">
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
