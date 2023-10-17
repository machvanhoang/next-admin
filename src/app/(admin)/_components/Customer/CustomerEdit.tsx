"use client";
interface Props {
  customer: any;
  status: any;
}
interface formDataValue {
  id: number;
  full_name: string;
  phone: string;
  email: string;
  address: string;
  media_id: number | null;
  username: string;
  status: any;
  avatar: any;
}
import { useState } from "react";
import Image from "next/image";
import { updateCustomer } from "@/services/CustomerService";
import { toast } from "react-toastify";
export default function CustomerEdit(props: Props) {
  const { customer, status } = props;
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [formData, setFormData] = useState<formDataValue>({
    id: customer.id,
    full_name: customer.full_name,
    phone: customer.phone,
    email: customer.email,
    address: customer.address,
    media_id: customer.media_id,
    username: customer.username,
    status: customer.status,
    avatar: customer.avatar,
  });
  const isFormDisabled = () => {
    return (
      !formData.full_name ||
      !formData.phone ||
      !formData.email ||
      !formData.address ||
      !formData.status ||
      !formData.username ||
      !formData.address
    );
  };
  const handleFormData = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleUpdateCustomer = async (e: any) => {
    e.preventDefault();
    setIsSubmit(true);
    const { success, message } = await updateCustomer(customer.id, formData);
    if (!success) {
      toast.error(message);
    } else {
      toast.info(message, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    setIsSubmit(false);
  };
  return (
    <>
      <form onSubmit={handleUpdateCustomer} method="POST" role="form">
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <h5 className="card-header border-bottom">Customer detail</h5>
              <div className="card-body pt-3">
                <div className="mb-3">
                  <label htmlFor="full_name" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="full_name"
                    defaultValue={formData.full_name}
                    onChange={handleFormData}
                    id="full_name"
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
                        type="text"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormData}
                        id="phone"
                      />
                      <div className="invalid-feedback">Feedback</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleFormData}
                        id="email"
                      />
                      <div className="invalid-feedback">Feedback</div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleFormData}
                  />
                  <div className="invalid-feedback">Feedback</div>
                </div>
              </div>
            </div>
            <div className="card">
              <h5 className="card-header border-bottom">Password</h5>
              <div className="card-body pt-3">
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    defaultValue=""
                    id="password"
                    placeholder="******"
                    autoComplete="off"
                  />
                  <div className="invalid-feedback">Feedback</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="new_password" className="form-label">
                    New password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="new_password"
                    defaultValue=""
                    id="new_password"
                    autoComplete="off"
                    placeholder="******"
                  />
                  <div className="invalid-feedback">Feedback</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="new_confirm_password" className="form-label">
                    New confirm password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="new_confirm_password"
                    defaultValue=""
                    id="new_confirm_password"
                    autoComplete="off"
                    placeholder="******"
                  />
                  <div className="invalid-feedback">Feedback</div>
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
                    value={formData.status.id}
                    onChange={handleFormData}
                  >
                    <option value={``}>Choice status</option>
                    {status?.map((status: any) => {
                      return (
                        <option key={status.id} value={status.id}>
                          {status.name}
                        </option>
                      );
                    })}
                  </select>
                  <div className="invalid-feedback feedback_status"></div>
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
                      <Image
                        src={formData?.avatar?.path}
                        alt="Image"
                        width={formData?.avatar?.width}
                        height={formData?.avatar?.height}
                      />
                    </div>
                    <label
                      className="photoUpload-file"
                      id="photo-zone"
                      htmlFor="file-zone"
                    >
                      <input
                        type="file"
                        name="file"
                        id="file-zone"
                        onChange={(e: any) => {}}
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
                      Width: 300px - Height: 300px
                      (.jpg|.gif|.png|.jpeg|.gif|.JPG|.PNG|.JPEG|.Png|.GIF)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
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
      </form>
    </>
  );
}
