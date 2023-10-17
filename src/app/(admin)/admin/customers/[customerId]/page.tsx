import Link from "next/link";
import { SvgBack } from "@/AdminComponent/Svg";
import { getCustomerDetail } from "@/services/CustomerService";
import CustomerEdit from "@/AdminComponent/Customer/CustomerEdit";
export default async function AdminCustomersDetail({
  params,
}: {
  params: {
    customerId: number;
  };
}) {
  const { customerId } = params;
  const { success, customer, status } = await getCustomerDetail(customerId);
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">
          <span className="text-muted fw-light">Admin / Customer /</span> Detail
        </h4>
        <Link
          href={`/admin/customers`}
          className="btn btn-secondary btn-add-back"
        >
          <SvgBack />
          Go black
        </Link>
      </div>
      <CustomerEdit customer={customer} status={status} />
    </>
  );
}
