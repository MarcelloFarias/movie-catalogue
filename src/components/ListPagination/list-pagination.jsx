import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./style.scss";
import Button from "../Button/button";

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
            <Button onClick={previousPage} style={{padding: "0.8rem"}}>
                <IoIosArrowBack/>
            </Button>
            <p className="pagination-numbers">
                {currentPage} ... {totalPages}
            </p>
            <Button onClick={nextPage} style={{padding: "0.8rem"}}>
                <IoIosArrowForward/>
            </Button>
        </div>
    );
}

export default ListPagination;