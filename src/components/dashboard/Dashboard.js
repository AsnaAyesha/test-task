
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../userSlice';


const Dashboard = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.counter.user)

  const column = [{
    name: "Name",
    selector: row => row.name,
    sortable: true
  },
  {
    name: "Age/Sex",
    selector: row => row.age,
    sortable: true
  },
  {
    name: "Mobile",
    selector: row => row.mobile,
    sortable: true
  }, {
    name: "Address",
    selector: row => row.address,
    sortable: true
  },
  {
    name: "Govt ID",
    selector: row => row.govtId,
    sortable: true
  },
  {
    name: "Guardian Details",
    selector: row => row.guardianDetails,
    sortable: true
  }, {
    name: "Nationality",
    selector: row => row.nationality,
    sortable: true
  }

  ]

  useEffect(() => {
    const fetchData = async () => {
      console.log(user.length)
      axios.get("https://localhost:8000/api/user/adduser")
        .then(res => {
          setRecords(res.data)
          dispatch(addUser(res.data))
        })
        .catch(err => console.log(err))
    }
    fetchData()
  }, [])

  const [records, setRecords] = useState([]);

  return (
    <div className='container list mt-5'>
      <DataTable
        columns={column}
        data={records}
      >
      </DataTable>
    </div>
  )
}

export default Dashboard

