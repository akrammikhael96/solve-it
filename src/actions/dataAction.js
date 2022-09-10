import { PER_PAGE, FILTER, SHOW_PAGE, FETCH_DATA, FETCH_DATA_REJECTED, FETCH_DATA_PENDING } from "../actionTypes/actionTypes";

const setRecordsPerPage = (records) => {
    return {
        type: PER_PAGE,
        recordsPerPage: records
    };
};

const setPageToShow = (pageNumber) => {
    return {
        type: SHOW_PAGE,
        pageToShow: pageNumber
    };
};

const filterRecords = (filterName) => {
    return {
        type: FILTER,
        name: filterName
    };
};

const fetchData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                "https://gorest.co.in/public/v2/users"
            );

            const data = await response.json();
            dispatch({ type: FETCH_DATA, data: data });
        } catch (err) {
            dispatch({ type: FETCH_DATA_REJECTED, error: err });
        }
    };
};





export { setRecordsPerPage, setPageToShow, filterRecords, fetchData };