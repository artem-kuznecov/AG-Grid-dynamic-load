import React from 'react'
import EmployeeGrid from 'components/Grids/EmployeeGrid'
import DepartmentsGrid from 'components/Grids/DepartmentsGrid'
import ActionButton from 'components/Modal/modalCard'

import { createRow, updateRow, deleteRow} from '../components/mixins/CRUD'

function Dashboard() {
  return (
    <div className="content" style={{ backgroundColor: 'transparent' }}>
      <section>
        </section>    
      <section id="employees" style={{ marginBottom: '5rem' }}>
        <h2>Сотрудники (главная таблица)</h2>
        <EmployeeGrid/>
      </section>

      <section id="departments" style={{ marginBottom: '5rem' }}>
        <h2>Отделения компании (зависимая таблица)</h2>
        <span style={{ display: 'flex', flexDirection: 'row' }}>
          <ActionButton title='создать запись' type='create' color='primary' action={createRow} />
          <ActionButton title='изменить запись' type='update' color='warning' action={updateRow} />
          <ActionButton title='удалить запись' type='delete' color='danger' action={deleteRow} />
        </span>
        <DepartmentsGrid />
      </section>
    </div>
  )
}

export default Dashboard
