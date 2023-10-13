import Link from "next/link";
import { SvgBack } from "@/AdminComponent/Svg";
export default async function AdminProductDetail({
  params,
}: {
  params: { productId: number };
}) {
  const { productId } = params;
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">Admin / Products /</span> Detail
        </h4>
        <Link href={`/admin/products`} className="btn btn-secondary btn btn-add-back">
          <SvgBack />
          Go back
        </Link>
      </div>
      <form action="#" method="POST" role="form" id="formUpdateProduct">
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
                    defaultValue=""
                    id="name"
                    placeholder=""
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
                    name="description"
                    className="form-control"
                    id="description"
                    cols={30}
                    rows={7}
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
                    defaultValue=""
                    id="seo_title"
                    placeholder=""
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
                    defaultValue=""
                    id="seo_keyword"
                    placeholder=""
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
                  <select className="form-select" name="status" id="status">
                    <option defaultValue="">Choice status</option>
                    <option>Published</option>
                    <option>Privated</option>
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
                    defaultValue=""
                    id="slug"
                    placeholder=""
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
                    className="form-control @error('category')is-invalid @enderror"
                    name="category"
                    defaultValue=""
                    id="category"
                    placeholder=""
                  />
                </div>
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
                    placeholder=""
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
                    type="button"
                    className="btn btn-primary btnUpdateProduct"
                    data-action=""
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
