"use client"
import { useState } from "react"
import Link from "next/link"
import { toast } from 'react-toastify';
import { fetchAdmin } from "@/lib/fetch";
interface formDataValue {
    name: string;
    slug: string;
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
export default function ProductEdit({ productId, product }: { productId: number, product: any }) {
    const [isSubmit, setSubmit] = useState<boolean>(false);
    const [formData, setFormData] = useState<formDataValue>({
        name: product.name,
        slug: product.slug,
        desc: product.desc,
        content: product.content,
        regular_price: product.regular_price,
        sale_price: product.sale_price,
        sku: product.sku,
        inventory: product.inventory,
        status: product.status,
        type: product.type,
        media_id: product.media_id,
        seo_title: product.seo?.title,
        seo_keyword: product.seo?.keyword,
        seo_description: product.seo?.description,
    });
    const handleFormData = (e: any) => {
        e.preventDefault();
        const newFormData = { ...formData, [e.target.name]: e.target.value };
        setFormData(newFormData);
    }
    const isFormDisabled = () => {
        return (
            !formData.name ||
            !formData.slug ||
            !formData.desc ||
            !formData.status ||
            !formData.content ||
            formData.regular_price <= 0 ||
            formData.sale_price <= 0 ||
            !formData.sku ||
            formData.inventory <= 0 ||
            !formData.seo_title ||
            !formData.seo_keyword ||
            !formData.seo_description
        );
    };
    const updateProduct = async (e: any) => {
        e.preventDefault();
        setSubmit(true);
        await fetchAdmin(`products/${productId}`, {
            method: "PUT",
            body: JSON.stringify(formData)
        }).then((res) => res.json()).then((res) => {
            const { success, message, product } = res;
            if (!success) {
                toast.error(message);
            } else {
                toast.success(message);
            }
        })
            .finally(() => {
                setSubmit(false);
            });
    }
    return (
        <form onSubmit={updateProduct} method="POST" role="form" id="formUpdateProduct">
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
                                    onChange={handleFormData}
                                    disabled={isSubmit}
                                    id="name"
                                />
                                <div className="invalid-feedback feedback_name"></div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="description"
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
                                    onChange={handleFormData}
                                    disabled={isSubmit}
                                    value={formData.desc}
                                ></textarea>
                                <div className="invalid-feedback feedback_description"></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="content" className="form-label font-small">
                                    Content
                                </label>
                                <textarea
                                    name="content"
                                    className="form-control"
                                    id="content"
                                    cols={30}
                                    rows={12}
                                    onChange={handleFormData}
                                    disabled={isSubmit}
                                    value={formData.content}
                                ></textarea>
                                <div className="invalid-feedback feedback_content"></div>
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
                    <div className="card mb-4">
                        <div className="card-header custom border-bottom">
                            <h4>Variants</h4>
                        </div>
                        <div className="card-body mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <Link
                                        href={`/admin/products/${productId}/variants`}
                                        className="btn btn-warning mt-1"
                                    >
                                        Setting variants
                                    </Link>
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
                                    id="seo_keyword"
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
                                    onChange={handleFormData}
                                    value={formData.seo_description}
                                    disabled={isSubmit}
                                    cols={30}
                                    rows={7}
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
                                    disabled={isSubmit}
                                    onChange={handleFormData}
                                    value={formData.status}>
                                    <option value={``}>Choice status</option>
                                    <option value={`published`}>Published</option>
                                    <option value={`privated`}>Privated</option>
                                </select>
                                <div className="invalid-feedback feedback_status"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header custom">
                            <h4>Slug</h4>
                        </div>
                        <div className="card-body">
                            <div className="mt-0">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="slug"
                                    onChange={handleFormData}
                                    value={formData.slug}
                                    disabled={isSubmit}
                                    id="slug"
                                />
                                <div className="invalid-feedback feedback_slug"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header custom border-bottom">
                            <h4>Product organization</h4>
                        </div>
                        <div className="card-body">
                            <div className="mt-3">
                                <label htmlFor="category" className="form-label font-small">
                                    Product category
                                </label>
                                <input
                                    type="text"
                                    className="form-control is-invalid"
                                    name="category"
                                    defaultValue=""
                                    id="category"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="type" className="form-label font-small">
                                    Product type
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={formData.type}
                                    disabled={isSubmit}
                                    id="type"
                                    readOnly
                                />
                            </div>
                            <div className="mt-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor="tags" className="form-label font-small">
                                        Tags
                                    </label>
                                    <a href="#" className="font-small" id="managementTags">
                                        Cài đặt
                                    </a>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="tags"
                                    id="tags"
                                />
                                <div className="invalid-feedback feedback_tag_name"></div>
                                <div className="listTags">
                                    <div className="item-tag">
                                        <div className="d-flex justify-content-start align-items-center item-tag__content">
                                            <span>Tag 1</span>
                                            <button className="btnRemoveTags" type="button">
                                                <span className="svg">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-x"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header custom border-bottom">
                            <h4>Avatar</h4>
                        </div>
                        <div className="card-body">
                            <div className="mt-3 mb-3">
                                <div className="photoUpload-zone">
                                    <div
                                        className="photoUpload-detail"
                                        id="photoUpload-preview"
                                    >
                                        <img className="rounded" src="" alt="Alt Photo" />
                                    </div>
                                    <label
                                        className="photoUpload-file"
                                        id="photo-zone"
                                        htmlFor="file-zone"
                                    >
                                        <input type="file" name="file" id="file-zone" />
                                        <input type="hidden" name="media_id" defaultValue="" />
                                        <i className="fas fa-cloud-upload-alt"></i>
                                        <p className="photoUpload-drop">
                                            Kéo và thả hình vào đây
                                        </p>
                                        <p className="photoUpload-or">hoặc</p>
                                        <p className="photoUpload-choose btn btn-sm bg-gradient-success">
                                            Chọn hình
                                        </p>
                                    </label>
                                    <div className="photoUpload-dimension">
                                        Width: 300 px - Height: 200 px
                                        (.jpg|.gif|.png|.jpeg|.gif|.JPG|.PNG|.JPEG|.Png|.GIF)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header custom border-bottom">
                            <h4>Gallery</h4>
                        </div>
                        <div className="card-body">
                            <div className="mt-3 mb-3">
                                <div className="appendMutipleFiles">
                                    <div
                                        className="file-item"
                                        id="deleteMediaItem__{{ $item->media->id }}"
                                    >
                                        <img src="" alt="" />
                                        <input type="hidden" name="media[]" defaultValue="" />
                                        <button
                                            type="button"
                                            className="deleteMediaItem"
                                            data-element="#deleteMediaItem__{{ $item->media->id }}"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-x-lg"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="photoUpload-zone">
                                    <label
                                        className="photoUpload-file"
                                        id="photo-zone"
                                        htmlFor="file-zones"
                                    >
                                        <input
                                            type="file"
                                            name="files"
                                            multiple
                                            id="file-zones"
                                        />
                                        <i className="fas fa-cloud-upload-alt"></i>
                                        <p className="photoUpload-drop">
                                            Kéo và thả hình vào đây
                                        </p>
                                        <p className="photoUpload-or">hoặc</p>
                                        <p className="photoUpload-choose btn btn-sm bg-gradient-success">
                                            Chọn hình
                                        </p>
                                    </label>
                                    <div className="photoUpload-dimension">
                                        Width: 300 px - Height: 200 px
                                        (.jpg|.gif|.png|.jpeg|.gif|.JPG|.PNG|.JPEG|.Png|.GIF)
                                    </div>
                                </div>
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
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isFormDisabled()}
                                >
                                    {isSubmit ? 'Updating' : 'Update'}
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
    )
}