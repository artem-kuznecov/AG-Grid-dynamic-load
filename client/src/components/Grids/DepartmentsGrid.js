import { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

import { formatToWords } from 'components/mixins/dateFormatter'

const DepartmentsGrid = () => {
  const [rowData, setRowData] = useState([])

  const [colDefs] = useState([
    { field: 'name', headerName: 'Название' },
    { field: 'foundation_date', headerName: 'Дата основания'},
    { field: 'about_text', headerName: 'Сфера деятельности' },
    { field: 'address', headerName: 'Адрес' },
    { field: 'firstname', headerName: 'Директор' },
    { field: 'lastname', headerName: '' },
  ])

  useEffect(() => {
    fetch(process.env.REACT_APP_DEPARTMENTS_URL + '?join')
    .then(response => response.json())
    .then(json => {
      const formated = json.map(v => {
        return {
          ...v,
          foundation_date: formatToWords(new Date(v.foundation_date))
        }
      })
      setRowData(formated)
    })
  }, [])

  return (
    <div id='main-table' className="ag-theme-quartz" style={{ height: 500, width: '100%' }}>
      <AgGridReact
        rowData={rowData} 
        columnDefs={colDefs}
        popupParent='#departments'
      />
    </div>
  )
}

export default DepartmentsGrid