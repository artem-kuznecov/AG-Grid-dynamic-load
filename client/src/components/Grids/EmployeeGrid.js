import React, { useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"

const EmployeeGrid = () => {
  // заголовки столбцов
  const colDefs = [
    { field: "firstname", headerName: 'Имя' },
    { field: "lastname", headerName: 'Фамилия' },
    { field: "birthdate", headerName: 'Дата рождения' },
    { field: "gender", headerName: 'Пол' },
  ]

  // определение возможности сортировки и фильтрации столбцов
  const defaultColDef = useMemo( () => ({
    sortable: true,
    filter: false
  }), [])

  // источник данных
  const datasource = {
    getRows(params) {
      fetch(process.env.REACT_APP_EMPLOYEES_URL)
        .then(httpResponse => httpResponse.json())
        .then(response => {
          params.successCallback(response, response.length)
        })
        .catch(error => {
          console.error(error)
          params.failCallback()
        })
    }
  }
  
  const onGridReady = (params) => {
    params.api.setGridOption('datasource', datasource)
  }

  return (
    <div id='main-table' className="ag-theme-quartz-dark" style={{ height: 500, width: '68%' }}>
      <AgGridReact
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowModelType='infinite'
        paginationPageSize={50}
        popupParent={document.querySelector('#employees')}
        cacheBlockSize={50}
        maxConcurrentDatasourceRequests={1}
        onGridReady={onGridReady}
      />
    </div>
  )
}

export default EmployeeGrid