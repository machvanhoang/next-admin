export default function AdminConfigs() {
    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <h4 className="fw-bold"><span className="text-muted fw-light">Admin / </span> Config</h4>
            </div>
            <form action="" method="POST" role="form">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header custom border-bottom">
                                <h4>General</h4>
                            </div>
                            <div className="card-body">
                                <div className="mt-3 mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control is-invalid" name="title"
                                        value="" id="title" placeholder="" />
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header custom border-bottom">
                                <h4>Detail</h4>
                            </div>
                            <div className="card-body">
                                <div className="mt-3 mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control is-invalid" name="address"
                                        value="" id="address" placeholder="" />
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                                <div className="mt-3 mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control is-invalid" name="email"
                                        value="" id="email" placeholder="" />
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                                <div className="mt-3 mb-3">
                                    <label htmlFor="hotline" className="form-label">Hotline</label>
                                    <input type="text" className="form-control is-invalid" name="hotline"
                                        value="" id="hotline" placeholder="" />
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                                <div className="mt-3 mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="text" className="form-control is-invalid" name="phone"
                                        value="" id="hotline" placeholder="" />
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                                <div className="mt-3 mb-3">
                                    <label htmlFor="zalo" className="form-label">Zalo</label>
                                    <input type="text" className="form-control is-invalid" name="zalo"
                                        value="" id="hotline" placeholder="" />
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                                <div className="mt-3 mb-3">
                                    <label htmlFor="website" className="form-label">Website</label>
                                    <input type="text" className="form-control is-invalid" name="website"
                                        value="" id="website" placeholder="" />
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                                <div className="mt-3 mb-3">
                                    <label htmlFor="fanpage" className="form-label">Fanpage</label>
                                    <input type="text" className="form-control is-invalid" name="fanpage"
                                        value="" id="fanpage" placeholder="" />
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header custom border-bottom">
                                <h4>Javascript</h4>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="google_map" className="form-label font-small">Google map</label>
                                    <textarea name="google_map" className="form-control is-invalid" id="google_map"
                                        cols={30} rows={7}></textarea>
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="google_analytics" className="form-label font-small">Google analytics</label>
                                    <textarea name="google_analytics" className="form-control is-invalid"
                                        id="google_analytics" cols={30} rows={7}></textarea>
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="google_mastertool" className="form-label font-small">Google master tool</label>
                                    <textarea name="google_mastertool" className="form-control is-invalid"
                                        id="google_mastertool" cols={30} rows={7}></textarea>
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="head_js" className="form-label font-small">Head JS</label>
                                    <textarea name="head_js" className="form-control is-invalid" id="head_js" cols={30} rows={7}></textarea>
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="body_js" className="form-label font-small">Head JS</label>
                                    <textarea name="body_js" className="form-control is-invalid" id="body_js" cols={30} rows={7}></textarea>
                                    <div className="invalid-feedback">
                                        Header js
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-header custom border-bottom">
                                <h4>Notification</h4>
                            </div>
                            <div className="card-body">
                                <div className="mt-3">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-footer">
                                <div className="d-flex justify-content-start">
                                    <button type="submit" className="btn btn-primary">Update</button>
                                    <button type="reset" className="btn btn-secondary ms-3">Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}