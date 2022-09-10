
import styles from "./RecordsPerPage.module.css"
import { useSelector, useDispatch } from "react-redux";
import { setRecordsPerPage } from "../../actions/dataAction"



const RecordsPerPage = () => {
    const data = useSelector((state) => state);
    // const [selected, setSelected] = useState(2);
    const dispatch = useDispatch();

    const handleChange = event => {
        // console.log(event.target.value);
        // setSelected(event.target.value);
        dispatch(setRecordsPerPage(event.target.value));

    };

    return (
        <div className={styles.recordsPerPageCard}>
            <span className={styles.perPageText}>Showing {data.recordsPerPage} of {data.records.length} {``}
                <select value={data.recordsPerPage} onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2" defaultValue>2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> per page</span>
        </div>
    );
};

export default RecordsPerPage;