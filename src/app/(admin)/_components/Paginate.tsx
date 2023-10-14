"use client"
import { useRouter } from "next/navigation";
export default function Paginate({ prev_page_url, next_page_url, last_page, current_page }: { prev_page_url: string, next_page_url: string, last_page: number, current_page: number }) {
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
          <li className={`page-item ${current_page === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handlePrevPage} disabled={current_page === 1} >
              Previous
            </button>
          </li>
          <li className={`page-item ${next_page_url === null ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handleNextPage} disabled={next_page_url === null}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
