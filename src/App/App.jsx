import { AppFilter, AppInfo, EmployeesAddForm, EmployeesList, SearchPanel } from '../components';
import './App.css';

export const App = () => {
  return (
    <div className='app'>
      <AppInfo />

      <div className='search-panel'>
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList />
      <EmployeesAddForm />
    </div>
  );
};
