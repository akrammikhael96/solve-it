
import styles from './App.module.css';
import { Provider } from "react-redux";
import store from "./store";
import logo from './solve-it.png'
import SearchFilter from './component/SearchFilter/SearchFilter';
import RecordsPerPage from './component/RecordsPerPage/RecordsPerPage';
import Pagination from './component/Pagination/Pagination';
import Table from './component/Table/Table';






function App() {





  return (
    <Provider store={store}>
      <div className={styles.mainPage}>
        <div className={styles.upperBorder}></div>
        <div className={styles.appBar}>
          <img className={styles.solveItLogo} src={logo} alt="solve it logo"></img>
        </div>
        <div className={styles.tableFiltersContainer}>
          <SearchFilter></SearchFilter>
          <RecordsPerPage></RecordsPerPage></div>

        <div className={styles.tableContainer}>
          <Table></Table>


          <Pagination></Pagination>


        </div>



      </div>


    </Provider>
  );
}

export default App;
