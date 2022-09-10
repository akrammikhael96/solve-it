import React from "react";
import styles from "./SearchFilter.module.css"
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { filterRecords } from "../../actions/dataAction";


const SearchFilter = () => {

    // const data = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChange = function (event) {

        dispatch(filterRecords(event.target.value));



    };

    return (
        <div className={styles.userSearchCard}>
            <h3 className={styles.title}>Users Directory</h3>
            <h5 className={styles.subtitle}>Search Users by Name</h5>
            <div className={styles.searchContainer}>
                <BiSearch className={styles.searchIcon} />
                <input onChange={handleChange} className={styles.inputField} type="text"></input>
            </div>
        </div>
    );
};

export default SearchFilter;