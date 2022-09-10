import { PER_PAGE, FILTER, SHOW_PAGE } from "../actionTypes/actionTypes";

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



export { setRecordsPerPage, setPageToShow, filterRecords };