"use client"
import { useRouter } from "next/navigation";
export default function Paginate({ links, current_page }: {
  links: {
    first: string | null,
    last: string | null,
    prev: string | null,
    next: string | null
  }, current_page: number
}) {
  const route = useRouter();
  const handlePrevPage = (e: any) => {
    e.preventDefault();
    route.push(`/admin/products?page=${current_page - 1}`);
  }
  const handleNextPage = (e: any) => {
    e.preventDefault();
    route.push(`/admin/products?page=${current_page + 1}`);
  }
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${links.prev === null ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handlePrevPage} disabled={links.prev === null} >
              Previous
            </button>
          </li>
          <li className={`page-item ${links.next === null ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handleNextPage} disabled={links.next === null}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
