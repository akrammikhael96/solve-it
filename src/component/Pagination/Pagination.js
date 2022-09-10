import React from "react";
import styles from "./Pagination.module.css"
import { useSelector, useDispatch } from "react-redux";
import { setPageToShow } from "../../actions/dataAction";

const RecordsPerPage = () => {
    const data = useSelector((state) => state);

    const dispatch = useDispatch();

    const clickHandler = function (event) {

        dispatch(setPageToShow(event.target.value));


    };

    const arrOfPages = Array.from({ length: data.noOfPages }, (v, k) => k + 1).map((pageNumber) =>

        <button onClick={clickHandler} value={pageNumber} key={pageNumber} className={`${styles.btn} ${+pageNumber === +data.pageToShow && styles.selected}`}>{pageNumber}</button>


    );






    return (
        <div>
            {data.records.length > data.recordsPerPage &&
                <div>{arrOfPages}</div>
            }
        </div>


    );
};

export default RecordsPerPage;