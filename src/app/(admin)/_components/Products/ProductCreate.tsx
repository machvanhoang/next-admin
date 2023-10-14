"use client"
import { useState } from "react"
import { fetchAdmin } from "@/lib/fetch";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
interface formDataValue {
    name: string;
    desc: string;
    content: string;
    regular_price: number;
    sale_price: number;
    sku: string;
    inventory: number;
    status: string;
    type: string;
    media_id: number | null;
    seo_title: string;
    seo_keyword: string;
    seo_description: string;
}
export default function ProductCreate() {
    const route = useRouter();
    const [formData, setFormData] = useState<formDataValue>({
        name: "",
        desc: "",
        content: "",
        regular_price: 0,
        sale_price: 0,
        sku: "",
        inventory: 0,
        status: "privated",
        type: "product",
        media_id: null,
        seo_title: "",
        seo_keyword: "",
        seo_description: ""
    });
    const [isSubmit, setSubmit] = useState<boolean>(false);
    const handleFormData = (e: any) => {
        e.preventDefault();
        const newFormData = { ...formData, [e.target.name]: e.target.value };
        setFormData(newFormData);
    }
    const isFormDisabled = () => {
        return (
            !formData.name ||
            !formData.desc ||
            !formData.content ||
            !formData.status ||
            formData.regular_price <= 0 ||
            formData.sale_price <= 0 ||
            !formData.sku ||
            formData.inventory <= 0 ||
            !formData.seo_title ||
            !formData.seo_keyword ||
            !formData.seo_description
        );
    };
    const saveProduct = async (e: any) => {
        e.preventDefault();
        setSubmit(true);
        await fetchAdmin("products", {
            method: "POST",
            body: JSON.stringify(formData)
        }).then((res) => res.json()).then((res) => {
            const { success, message, product } = res;
            if (!success) {
                toast.error(message);
            } else {
                toast.success(message);
                route.push(`/admin/products/${product.id}`);
            }
        })
            .finally(() => {
                setSubmit(false);
            });
    }
    return (
        <>
            <form onSubmit={saveProduct} method="POST" role="form" id="formCreateProduct">
                <input type="hidden" name="type" defaultValue="" />
                <div className="row">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header custom border-bottom">
                                <h4>Product detail</h4>
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
                                        value={formData.name}
                                        disabled={isSubmit}
                                        id="name"
                                        onChange={handleFormData}
                                    />
                                    <div className="invalid-feedback feedback_name"></div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="desc"
                                        className="form-label font-small"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        name="desc"
                                        className="form-control"
                                        id="desc"
                                        cols={30}
                                        rows={7}
                                        disabled={isSubmit}
                                        onChange={handleFormData}
                                        value={formData.desc}
                                    ></textarea>
                                    <div className="invalid-feedback feedback_desc"></div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="desc"
                                        className="form-label font-small"
                                    >
                                        Content
                                    </label>
                                    <textarea
                                        name="content"
                                        className="form-control"
                                        id="content"
                                        cols={30}
                                        rows={12}
                                        disabled={isSubmit}
                                        onChange={handleFormData}
                                        value={formData.content}
                                    ></textarea>
                                    <div className="invalid-feedback feedback_desc"></div>
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
                                            value={formData.regular_price}
                                            disabled={isSubmit}
                                            onChange={handleFormData}
                                            id="regular_price"

                                        />
                                        <div className="invalid-feedback feedback_regular_price"></div>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label htmlFor="sale_price" className="form-label">
                                            Sale price
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="sale_price"
                                            value={formData.sale_price}
                                            disabled={isSubmit}
                                            onChange={handleFormData}
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
                                            type="number"
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
                        <div className="card mb-4">
                            <div className="card-header custom border-bottom">
                                <h4>Seo</h4>
                            </div>
                            <div className="card-body">
                                <div className="mt-3 mb-3">
                                    <label htmlFor="seo_title" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="seo_title"
                                        onChange={handleFormData}
                                        disabled={isSubmit}
                                        value={formData.seo_title}
                                        id="seo_title"
                                    />
                                    <div className="invalid-feedback feedback_seo_title"></div>
                                </div>
                                <div className="mt-3 mb-3">
                                    <label htmlFor="seo_keyword" className="form-label">
                                        Keyword
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="seo_keyword"
                                        onChange={handleFormData}
                                        disabled={isSubmit}
                                        value={formData.seo_keyword}
                                        id="keyword"
                                    />
                                    <div className="invalid-feedback feedback_seo_keyword"></div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="seo_description"
                                        className="form-label font-small"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        name="seo_description"
                                        className="form-control"
                                        id="seo_description"
                                        cols={30}
                                        rows={7}
                                        disabled={isSubmit}
                                        onChange={handleFormData}
                                        value={formData.seo_description}
                                    ></textarea>
                                    <div className="invalid-feedback feedback_seo_description"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-header custom">
                                <h4>Status</h4>
                            </div>
                            <div className="card-body">
                                <div className="mt-0">
                                    <select
                                        className="form-select"
                                        name="status"
                                        id="status"
                                        value={formData.status}
                                        disabled={isSubmit}
                                        onChange={handleFormData}>
                                        <option value={``}>Choice status</option>
                                        <option value={`published`}>Published</option>
                                        <option value={`privated`}>Privated</option>
                                    </select>
                                    <div className="invalid-feedback feedback_status"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header custom border-bottom">
                                <h4>Product organization</h4>
                            </div>
                            <div className="card-body">
                                <div className="mt-3">
                                    <label htmlFor="type" className="form-label font-small">
                                        Product type
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={formData.type}
                                        id="type"
                                        disabled={isSubmit}
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
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isFormDisabled()}
                                    >
                                        {isSubmit ? 'Saving' : 'Create'}
                                    </button>
                                    <button type="reset" disabled={isSubmit} className="btn btn-secondary ms-3">
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}