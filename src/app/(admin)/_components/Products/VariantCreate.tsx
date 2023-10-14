"use client"
import { useState } from "react"
interface formDataValue {
    regular_price: number;
    sale_price: number;
    sku: string;
    inventory: number;
    media_id: number | null;
    product_id: number;
}
export default function VariantCreate() {
    const [isSubmit, setIsSumit] = useState<boolean>(false);
    const [formData, setFormData] = useState<formDataValue>({
        regular_price: 0,
        sale_price: 0,
        sku: "",
        inventory: 0,
        media_id: null,
        product_id: 0
    });
    const handleFormData = (e: any) => {
        e.preventDefault();
        const newFormData = { ...formData, [e.target.name]: e.target.value };
        setFormData(newFormData);
    }
    const isFormDisabled = () => {
        return (
            formData.regular_price <= 0 ||
            formData.sale_price <= 0 ||
            !formData.sku ||
            formData.inventory <= 0 ||
            formData.product_id <= 0
        );
    };
    return (
        <>
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
                                id="regular_price"
                                onChange={handleFormData}
                                disabled={isSubmit}
                                value={formData.regular_price}
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
                                value={formData.sale_price}
                                onChange={handleFormData}
                                disabled={isSubmit}
                                id="regular_price"
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
                                disabled={isSubmit}
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
                                disabled={isSubmit}
                                value={formData.inventory}
                                id="inventory"
                            />
                            <div className="invalid-feedback feedback_inventory"></div>
                        </div>
                    </div>
                </div>
            </div>
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
        </>
    )
}