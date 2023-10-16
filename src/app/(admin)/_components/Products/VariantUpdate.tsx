"use client";
import { useState } from "react";
import { updateVariantByProduct } from "@/services/ProductServices";
import { toast } from "react-toastify";
interface formDataValue {
  name: string;
  regular_price: number;
  sale_price: number;
  sku: string;
  status: string;
  inventory: number;
  media_id: number | null;
  product_id: number;
}
export default function VariantUpdate({
  variant,
  productId,
  product,
}: {
  variant: any;
  productId: number;
  product: any;
}) {
  const [isSubmit, setIsSumit] = useState<boolean>(false);
  const [formData, setFormData] = useState<formDataValue>({
    name: variant.name,
    regular_price: variant.regular_price,
    sale_price: variant.sale_price,
    sku: variant.sku,
    status: variant.status,
    inventory: variant.inventory,
    media_id: null,
    product_id: productId,
  });
  const isFormDisabled = () => {
    return (
      !formData.name ||
      formData.regular_price <= 0 ||
      formData.sale_price <= 0 ||
      !formData.sku ||
      !formData.status ||
      formData.inventory <= 0 ||
      formData.product_id <= 0
    );
  };
  const handleFormData = (e: any) => {
    e.preventDefault();
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  };
  const updateVariant = async (e: any) => {
    e.preventDefault();
    setIsSumit(true);
    const { success, message } = await updateVariantByProduct(
      productId,
      variant.id,
      formData
    );
    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
    }
    setIsSumit(false);
  };
  return (
    <>
      <form
        onSubmit={updateVariant}
        method="POST"
        role="form"
        id="formCreateProduct"
      >
        <input type="hidden" name="type" defaultValue="" />
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header custom border-bottom">
                <h4>Variants detail</h4>
              </div>
              <div className="card-body">
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={handleFormData}
                        value={formData.name}
                        id="name"
                      />
                      <div className="invalid-feedback feedback_name"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-0">
                      <label htmlFor="name" className="form-label">
                        Status
                      </label>
                      <select
                        className="form-select"
                        name="status"
                        id="status"
                        disabled={isSubmit}
                        onChange={handleFormData}
                        value={formData.status}
                      >
                        <option value={``}>Choice status</option>
                        <option value={`published`}>Published</option>
                        <option value={`privated`}>Privated</option>
                      </select>
                    </div>
                  </div>
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
                      type="number"
                      className="form-control"
                      name="regular_price"
                      onChange={handleFormData}
                      value={formData.regular_price}
                      id="regular_price"
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
                      onChange={handleFormData}
                      value={formData.sale_price}
                      id="sale_price"
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
                      onChange={handleFormData}
                      value={formData.sku}
                      id="sku"
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
                      onChange={handleFormData}
                      value={formData.inventory}
                      id="inventory"
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
                <h4>
                  {product.name}{" "}
                  <span className={`badge badge-${product.status}`}>
                    {product.status}
                  </span>
                </h4>
              </div>
              <div className="card-body">
                <div className="mt-3">
                  <label htmlFor="type" className="form-label font-small">
                    Product type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={product.type}
                    id="type"
                    disabled={true}
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="user_id" className="form-label font-small">
                    slug
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={product.slug}
                    id="slug"
                    disabled={true}
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
                    type="submit"
                    disabled={isFormDisabled()}
                    className="btn btn-primary"
                  >
                    {isSubmit ? "Updating" : "Update"}
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
