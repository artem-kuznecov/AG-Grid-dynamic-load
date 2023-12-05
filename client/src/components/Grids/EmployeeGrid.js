import React, { useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

import { formatToWords } from 'components/mixins/dateFormatter'

const EmployeeGrid = () => {
  // заголовки столбцов
  const colDefs = [
    { field: "firstname", headerName: 'Имя', width: '300%' },
    { field: "lastname", headerName: 'Фамилия', width: '300%'},
    { field: "birthdate", headerName: 'Дата рождения', width: '300%' },
    { field: "gender", headerName: 'Пол', width: '290%' },
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
          const formated = response.map(v => {
            return {
              ...v,
              birthdate: formatToWords(new Date(v.birthdate)),
              gender: v.gender == 'М' ? 'Мужской' : 'Женский'
            }
          })
          params.successCallback(formated, formated.length)
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
    <div id='main-table' className="ag-theme-quartz" style={{ height: 500, width: '100%' }}>
      <AgGridReact
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowModelType='infinite'
        paginationPageSize={25}
        popupParent={document.querySelector('#main-table')}
        cacheBlockSize={25}
        maxConcurrentDatasourceRequests={1}
        onGridReady={onGridReady}
      />
    </div>
  )
}

export default EmployeeGrid