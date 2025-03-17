import React from 'react';
import { Switch } from 'antd';
import "./DepartmentTable.css"; // Import custom styles

interface Department {
  code: string;
  name: string;
  description: string;
  createdBy: string;
  createdOn: string;
  active: boolean;
}

interface DepartmentTableProps {
  departments: Department[];
  selectedDepartments: number[];
  toggleCheckbox: (index: number) => void;
  toggleActive: (index: number) => void;
  setSelectedDepartments: (selected: number[]) => void;
}

const DepartmentTable: React.FC<DepartmentTableProps> = ({ departments, selectedDepartments, toggleCheckbox, toggleActive, setSelectedDepartments }) => {
  return (
    <div className="bg-white rounded-lg p-4 mt-4">
      <table className="w-full border-collapse shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="p-3 text-left">
              <input
                type="checkbox"
                onChange={(e) => e.target.checked ? setSelectedDepartments(departments.map((_, i) => i)) : setSelectedDepartments([])}
                checked={selectedDepartments.length === departments.length}
              />
            </th>
            <th className="text-gray-500">Code</th>
            <th className="p-3 text-left text-gray-500">Name</th>
            <th className="p-3 text-left text-gray-500">Description</th>
            <th className="p-3 text-left text-gray-500">Created By</th>
            <th className="p-3 text-left text-gray-500">Created On</th>
            <th className="p-3 text-left text-gray-500">Active</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="p-3">
                <input type="checkbox" checked={selectedDepartments.includes(index)} onChange={() => toggleCheckbox(index)} />
              </td>
              <td className="p-3 font-bold">{dept.code}</td>
              <td className="p-3">{dept.name}</td>
              <td className="p-3">{dept.description}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-lg text-sm font-semibold ${dept.createdBy === 'Owner' ? 'text-blue-500 bg-blue-50' : dept.createdBy === 'Member' ? 'text-dark-blue bg-blue-100' : 'text-black bg-gray-200'}`}
                >
                  {dept.createdBy}
                </span>
              </td>
              <td className="p-3">{dept.createdOn}</td>
              <td className="p-3">
                <Switch
                  checked={dept.active}
                  onChange={() => toggleActive(index)}
                  className={`custom-switch ${dept.active ? 'active-switch' : 'inactive-switch'}`}
                />
              </td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>















      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <label className="mr-2 text-sm text-gray-600">No of rows per page</label>
          <select defaultValue={10} className="border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value={5}>5</option><option value={10}>10</option><option value={20}>20</option><option value={50}>50</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 text-blue-500 hover:text-blue-700"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
          <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">1</button>
          <button className="px-3 py-1 text-sm text-blue-500 hover:bg-blue-100 rounded">2</button>
          <button className="px-3 py-1 text-sm text-blue-500 hover:bg-blue-100 rounded">3</button>
          <button className="px-3 py-1 text-sm text-blue-500 hover:bg-blue-100 rounded">4</button>
          <span className="px-2 text-sm">...</span>
          <button className="px-3 py-1 text-sm text-blue-500 hover:bg-blue-100 rounded">10</button>
          <button className="px-3 py-1 text-sm text-blue-500 hover:bg-blue-100 rounded">11</button>
          <button className="p-1 text-blue-500 hover:text-blue-700"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentTable;