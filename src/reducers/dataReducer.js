import { PER_PAGE, FILTER, SHOW_PAGE, FETCH_DATA, FETCH_DATA_PENDING } from "../actionTypes/actionTypes";

const initialState = {
    pending: true,
    recordsPerPage: 2,
    allRecords: [],
    records: [],
    // records: [{ "id": 2538, "name": "Dhanadeepa Dwivedi II", "email": "ii_dhanadeepa_dwivedi@rowe.net", "gender": "female", "status": "active" }, { "id": 2537, "name": "Agnimitra Dubashi PhD", "email": "dubashi_phd_agnimitra@wisoky-metz.co", "gender": "male", "status": "inactive" }, { "id": 2536, "name": "Akshaj Devar", "email": "devar_akshaj@kovacek.name", "gender": "female", "status": "inactive" }, { "id": 2535, "name": "Bhagwati Gupta", "email": "gupta_bhagwati@schimmel.name", "gender": "male", "status": "inactive" }, { "id": 2534, "name": "Aadi Kaur", "email": "kaur_aadi@batz.io", "gender": "female", "status": "active" }, { "id": 2533, "name": "Hiranya Shah", "email": "hiranya_shah@smith-muller.biz", "gender": "female", "status": "inactive" }, { "id": 2532, "name": "Bhaves Somayaji", "email": "bhaves_somayaji@johnson.name", "gender": "male", "status": "inactive" }, { "id": 2531, "name": "Satyen Kaul", "email": "kaul_satyen@grady-bins.name", "gender": "male", "status": "inactive" }, { "id": 2530, "name": "Prasanna Singh", "email": "singh_prasanna@kertzmann.io", "gender": "male", "status": "inactive" }, { "id": 2529, "name": "Sen. Satish Asan", "email": "satish_sen_asan@rutherford-runolfsson.co", "gender": "male", "status": "active" }],
    pageToShow: 1,
    filterName: "",
    get noOfPages() { return Math.ceil(this.allRecords.length / this.recordsPerPage) },
};

const dataReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_DATA_PENDING:
            return {
                ...state,
                pending: action.pending,


            };


        case FETCH_DATA:
            return {
                ...state,
                pending: false,
                records: action.data,
                allRecords: action.data,
                get noOfPages() { return Math.ceil(this.records.length / this.recordsPerPage) }
            };


        case PER_PAGE:
            return {
                ...state,
                recordsPerPage: action.recordsPerPage,
                pageToShow: 1,
                get noOfPages() { return Math.ceil(this.records.length / this.recordsPerPage) }

            };

        case SHOW_PAGE:
            return {
                ...state,
                pageToShow: action.pageToShow,
                get noOfPages() { return Math.ceil(this.records.length / this.recordsPerPage) }

            };

        case FILTER:
            return {
                ...state,
                filterName: action.name,
                pageToShow: 1,
                records: state.allRecords.filter(el => el.name.toLocaleLowerCase().includes(action.name.toLocaleLowerCase())),
                get noOfPages() { return Math.ceil(this.records.length / this.recordsPerPage) },
                get recordsPerPage() {
                    if (this.filterName === "") { return initialState.recordsPerPage }
                    else { return this.records.length }
                },


            };
        default:
            return state;
    }
};


export default dataReducer;