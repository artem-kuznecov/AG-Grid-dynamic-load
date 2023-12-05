import { useEffect, useState, useCallback, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

const DepartmentsGrid = () => {
  const [rowData, setRowData] = useState([])
  const gridRef = useRef(null)

  const CompanyLogoRenderer = ({ value }) => (
    <span
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <img
          alt={`Flag`}
          src={rowData.find(v => v.name === value)?.logo_link}
          style={{
            display: 'block',
            width: '25px',
            height: 'auto',
            maxHeight: '50%',
            marginRight: '12px',
            filter: 'brightness(1.1)',
          }}
        />
      <p
        style={{
          height: '50%',
          marginTop:'-5px'
        }}
      >
        {value}
      </p>
    </span>
  )

  const [colDefs] = useState([
    { field: 'name', headerName: 'Название', cellRenderer: CompanyLogoRenderer },
    { field: 'foundation_date', headerName: 'Дата основания'},
    { field: 'about_text', headerName: 'Сфера деятельности' },
    { field: 'address', headerName: 'Адрес' },
    { field: 'firstname', headerName: 'Директор' },
    { field: 'lastname', headerName: '' },
  ])

  useEffect(() => {
    fetch(process.env.REACT_APP_DEPARTMENTS_URL + '?join')
    .then(response => response.json())
    .then(json => setRowData(json))
  }, [gridRef])

  function logger() {
    console.log('test:', rowData.find(v => v.name === 'название компании')?.logo_link)
  }

  return (
    <div id='main-table' className="ag-theme-quartz" style={{ height: 500, width: '100%' }}>
      <button onClick={logger}>click me</button>
      <AgGridReact
        ref={gridRef}
        rowData={rowData} 
        columnDefs={colDefs}
        // onNewColumnsLoaded={}
        onRowDataUpdated={useCallback((params) => {params.api.redrawRows()})}
      />
    </div>
  )
}

export default DepartmentsGrid