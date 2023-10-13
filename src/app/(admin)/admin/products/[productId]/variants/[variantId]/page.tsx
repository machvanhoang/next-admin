import Link from "next/link";
export default function AdminProductsVariantsDetail({
  params,
}: {
  params: { productId: number; variantId: number };
}) {
  const { productId, variantId } = params;
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">
            Admin / Product / Variants /
          </span>{" "}
          Detail
        </h4>
        <Link
          href={`/admin/products/${productId}/variants`}
          className="btn btn-secondary"
        >
          Go back variants
        </Link>
      </div>
      <form action="#" method="POST" role="form" id="formCreateProduct">
        <input type="hidden" name="type" defaultValue="" />
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header custom border-bottom">
                <h4>Variants detail</h4>
              </div>
              <div className="card-body">
                <div className="mt-3 mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    defaultValue=""
                    id="name"
                    placeholder=""
                  />
                  <div className="invalid-feedback feedback_name"></div>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header custom border-bottom">
                <h4>Price</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <label htmlFor="regular_price" className="form-label">
                      Regular price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="regular_price"
                      defaultValue=""
                      id="regular_price"
                      placeholder=""
                    />
                    <div className="invalid-feedback feedback_regular_price"></div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <label htmlFor="sale_price" className="form-label">
                      Sale price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sale_price"
                      defaultValue=""
                      id="regular_price"
                      placeholder=""
                    />
                    <div className="invalid-feedback feedback_sale_price"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header custom border-bottom">
                <h4>Inventory</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <label htmlFor="sku" className="form-label">
                      Sku
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sku"
                      defaultValue=""
                      id="sku"
                      placeholder=""
                    />
                    <div className="invalid-feedback feedback_sku"></div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <label htmlFor="inventory" className="form-label">
                      Inventory
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="inventory"
                      defaultValue=""
                      id="inventory"
                      placeholder=""
                    />
                    <div className="invalid-feedback feedback_inventory"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header custom border-bottom">
                <h4>Product detail</h4>
              </div>
              <div className="card-body">
                <div className="mt-3">
                  <label htmlFor="type" className="form-label font-small">
                    Product type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue=""
                    id="type"
                    placeholder=""
                    readOnly
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="user_id" className="form-label font-small">
                    Status
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue=""
                    id="user_id"
                    placeholder=""
                    readOnly
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="user_id" className="form-label font-small">
                    Vendor
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue=""
                    id="user_id"
                    placeholder=""
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-footer">
                <div className="d-flex justify-content-start">
                  <button
                    type="button"
                    className="btn btn-primary btnSaveProduct"
                  >
                    Update
                  </button>
                  <button type="reset" className="btn btn-secondary ms-3">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
