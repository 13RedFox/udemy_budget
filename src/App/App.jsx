import { AppFilter, AppInfo, EmployeesAddForm, EmployeesList, SearchPanel } from '../components';
import './App.css';

export const App = () => {
  const data = [
    { id: 1, name: 'John C.', salary: 800, increase: false },
    { id: 2, name: 'Alex M.', salary: 3800, increase: true },
    { id: 3, name: 'Carl W.', salary: 5800, increase: false },
  ];

  return (
    <div className='app'>
      <AppInfo />

      <div className='search-panel'>
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
};
