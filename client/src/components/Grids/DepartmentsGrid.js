import { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

const DepartmentsGrid = () => {
  const [rowData, setRowData] = useState([])

  const colDefs = [
    { field: "name", headerName: 'Название' },
    { field: "foundation_date", headerName: 'Дата основания'},
    { field: "about_text", headerName: 'Сфера деятельности' },
    { field: "address", headerName: 'Адрес' },
    { field: "firstname", headerName: 'Директор' },
    { field: "lastname", headerName: '' },
  ]

  useEffect(() => {
    fetch(process.env.REACT_APP_DEPARTMENTS_URL + '?join')
    .then(response => response.json())
    .then(json => setRowData(json))
  }, [])

  return (
    <div id='main-table' className="ag-theme-quartz-dark" style={{ height: 500, width: '100%' }}>
      <AgGridReact  
        rowData={rowData} 
        columnDefs={colDefs} 
      />
    </div>
  )
}

export default DepartmentsGrid