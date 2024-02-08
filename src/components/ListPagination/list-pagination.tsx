import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./style.scss";

function ListPagination({currentPage, totalPages, pageHandler}) {
    const nextPage = () => {
        if(currentPage < totalPages) {
            pageHandler(currentPage + 1);
        }
    }

    const previousPage = () => {
        if(currentPage > 1) {
            pageHandler(currentPage - 1);
        }
    }

    return (
        <div className="pagination-row">
            <button className="btn btn-pagination" onClick={previousPage}>
                <IoIosArrowBack/>
            </button>
            <p>{currentPage} ... {totalPages}</p>
            <button className="btn btn-pagination" onClick={nextPage}>
                <IoIosArrowForward/>
            </button>
        </div>
    );
}

export default ListPagination;