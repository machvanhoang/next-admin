import Link from "next/link"
export default function AdminCustomersDetail() {
    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <h4 className="fw-bold"><span className="text-muted fw-light">Admin / Customer /</span> Detail</h4>
                <Link href={`/admin/customers/create`} className="btn btn-primary">New customer</Link>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-4">
                        <h5 className="card-header border-bottom">Customer detail</h5>
                        <form action="" method="POST" role="form">

                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="full_name" className="form-label">Fullname</label>
                                    <input type="text" className="form-control is-invalid"
                                        name="full_name" value="" id="full_name"
                                        placeholder="David Mach" />
                                    <div className="invalid-feedback">
                                        Feedback
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Phone</label>
                                            <input type="text" className="form-control is-invalid"
                                                name="phone" value="" id="phone"
                                                placeholder="" />
                                            <div className="invalid-feedback">
                                                Feedback
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email address</label>
                                            <input type="email" className="form-control is-invalid"
                                                name="email" value="" id="email"
                                                placeholder="name@example.com" />
                                            <div className="invalid-feedback">
                                                Feedback
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input className="form-control is-invalid" type="text"
                                        name="username" id="username" placeholder="Username"
                                        value="" />
                                    <div className="invalid-feedback">
                                        Feedback
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control is-invalid"
                                        name="password" value="" id="password" placeholder="******" />
                                    <div className="invalid-feedback">
                                        Feedback
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="new_password" className="form-label">New password</label>
                                    <input type="password" className="form-control is-invalid"
                                        name="new_password" value="" id="new_password"
                                        placeholder="******" />
                                    <div className="invalid-feedback">
                                        Feedback
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="new_confirm_password" className="form-label">New confirm password</label>
                                    <input type="password" className="form-control is-invalid"
                                        name="new_confirm_password" value=""
                                        id="new_confirm_password" placeholder="******" />
                                    <div className="invalid-feedback">
                                        Feedback
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="customer_status_id" className="form-label">Status</label>
                                    <select className="form-select is-invalid"
                                        name="customer_status_id" id="customer_status_id">
                                        <option value="">Choice status</option>
                                        <option value="1">Published</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Feedback
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer border-top">
                                <div className="d-flex justify-content-start">
                                    <button type="submit" className="btn btn-primary">Update</button>
                                    <button type="reset" className="btn btn-secondary ms-3">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}