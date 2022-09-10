import "./Table.module.css"
import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const Table = () => {

    const data = useSelector((state) => state);

    const tableItems = data.records.slice(((data.recordsPerPage * data.pageToShow) - data.recordsPerPage), (data.recordsPerPage * data.pageToShow)).map((row) =>
        <tr key={row.id}>
            <td data-column="#">{row.id}</td>
            <td data-column="Name">{row.name}</td>
            <td data-column="Email Address">{row.email}</td>
            <td data-column="Gender">{row.gender}</td>
            <td data-column="Status"><li style={{ color: row.status === "active" ? "green" : "grey" }}>{row.status}</li></td>
            <td data-column="Created Date">12-12-2019 10:00 AM</td>
            <td data-column="Updated Date">12-12-2019 10:00 AM</td>
        </tr>
    );


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Created Date</th>
                        <th>Updated Date</th>
                    </tr>
                </thead>
                <tbody>



                    {tableItems}

                </tbody>



            </table>
            {data.records.length === 0 &&
                <h5 className="noRecords">No records Found</h5>}

        </div>



    );
}

export default Table;