import Dashboard from 'views/Dashboard.js'
import DepartmentsView from 'views/DepartmentsView'
import EmployeesView from 'views/EmployeesView'

var routes = [
  {
    path: '/dashboard',
    name: 'Сводка',
    icon: 'nc-icon nc-layout-11 skeleton',
    component: <Dashboard />,
    layout: '/admin'
  },
  {
    path: '/employees',
    name: 'Сотрудники',
    icon: 'nc-icon nc-single-02',
    component: <EmployeesView />,
    layout: '/admin'
  },
  {
    path: '/departments',
    name: 'Отделения компании',
    icon: 'nc-icon nc-bank',
    component: <DepartmentsView />,
    layout: '/admin'
  }
]
export default routes