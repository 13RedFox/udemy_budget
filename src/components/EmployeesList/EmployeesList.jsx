import { EmployeesListItem } from '../EmployeesListItem';
import './EmployeesList.css';

export const EmployeesList = ({ data }) => {
  return (
    <ul className='app-list list-group'>
      {[] &&
        data.map((item) => (
          <EmployeesListItem
            key={item.id}
            name={item.name}
            salary={item.salary}
            increase={item.increase}
          />
        ))}
    </ul>
  );
};
