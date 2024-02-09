import React from "react";
import "./style.scss";

function List({children}) {
    return (
        <ul className="list">
            {children}
        </ul>
    );
}

export default List;