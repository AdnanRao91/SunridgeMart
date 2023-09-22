import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const GlobalPagination = ({ currentPage, limit, onPageChange, handleChangeLimit, }) => {

    const pageNumbers = Array.from({ length: limit }, (_, i) => i + 1);

    const visiblePages = 5; // Number of visible page buttons
    const halfVisiblePages = Math.floor(visiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(limit, currentPage + halfVisiblePages);

    // Adjust startPage and endPage if they don't show enough pages
    if (endPage - startPage < visiblePages - 1) {
        if (startPage === 1) {
            endPage = visiblePages;
        } else {
            startPage = limit - visiblePages + 1;
        }
    }


    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <span className="f-14 proxima-regular">Items</span>
                <span className="f-14 proxima-regular nova-bold">1 - 20</span>
                <div className="flex gap-3 ml-5 items-center">
                    <span className="f-14 proxima-regular">Sort By</span>
                    <select className="border border-gray-300 rounded focus:outline-none p-1">
                        <option>Latest Products</option>
                        <option>High to low price</option>
                        <option>Low to high price</option>
                        <option>Popularity</option>
                    </select>
                </div>
                <div className="flex gap-3 ml-5 items-center">
                    <span className="f-14 proxima-regular">Show</span>
                    <select value={limit} onChange={(e) => handleChangeLimit(e.target.value)} className="border border-gray-300 rounded focus:outline-none p-1">
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <ul className="pagination">
                    {/* {currentPage > 1 && ( */}
                    <li className="page-item">
                        <button onClick={() => {
                            if (currentPage > 0) {
                                onPageChange(currentPage - 1)
                            }
                        }} className="page-link">
                            <KeyboardArrowLeft />
                        </button>
                    </li>
                    {/* )} */}
                    {/* {pageNumbers.slice(startPage - 1, endPage).map((pageNumber) => (
                        <li
                            key={pageNumber}
                            className={`${pageNumber === currentPage ? "active" : ""} page-item`}
                        >
                            <button onClick={() => onPageChange(pageNumber)} className="page-link">
                                {pageNumber}
                            </button>
                        </li>
                    ))} */}
                    {/* {currentPage < limit && ( */}
                    <li className="page-item">
                        <button onClick={() => onPageChange(currentPage + 1)} className="page-link">
                            <KeyboardArrowRight />
                        </button>
                    </li>
                    {/* )} */}
                </ul>
            </div>
        </div>
    )
}

export default GlobalPagination