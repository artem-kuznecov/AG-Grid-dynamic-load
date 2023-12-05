import React from 'react'

import EmployeeGrid from 'components/Grids/EmployeeGrid'
import DepartmentsGrid from 'components/Grids/DepartmentsGrid'
import ModalAdd from 'components/Modal'

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
          <ModalAdd title='Создать запись' type='create'/>
          <ModalAdd title='Изменить запись' type='update'/>
          <ModalAdd title='Удалить запись' type='delete'/>
        </span>
        <DepartmentsGrid />
      </section>
    </div>
  )
}

export default Dashboard
