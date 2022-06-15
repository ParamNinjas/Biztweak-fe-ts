import React from 'react';
import { PieChart, Pie} from 'recharts';
// import { PieChart } from 'react-minimal-pie-chart';


  
  
const Pchart = () => {
  
// Sample data
const data = [
  {name: 'Geek-i-knack', students: 250},
  {name: 'Geek-o-mania', students: 1000}
];
const data1 = [
    {name: 'Geeksforgeeks', students: 400},
    {name: 'Technical scripter', students: 1000},
  ];
  const data2 = [
    {name: 'Geeksforgeeks', students: 100},
    {name: 'Technical scripter', students: 1000},
  ];
  const data3 = [
    {name: 'Geeksforgeeks', students: 450},
    {name: 'Technical scripter', students: 1000},

  ];
  const data4 = [
    {name: 'Geeksforgeeks', students: 100},
    {name: 'Technical scripter', students: 1000},

  ];
  const data5 = [
    {name: 'Geeksforgeeks', students: 400},
    {name: 'Technical scripter', students: 700},

  ];
  const data6 = [
    {name: 'Geeksforgeeks', students: 200},
    {name: 'Technical scripter', students: 700},
  ];
  
  
return (
    <div className='pieChart'>
        {/* <div className='p'>
    <div className='chart1'>
        <PieChart width={300} height={300} >
          <Pie data={data}  dataKey="students" outerRadius={50} fill="green" />
        </PieChart>
        </div>
        <div className='chart2'>
        <PieChart width={300} height={300}>
          <Pie data={data1} dataKey="students" outerRadius={50} fill="red" />
        </PieChart>
        </div>
        <div className='chart3'>
        <PieChart width={300} height={300}>
          <Pie data={data2} dataKey="students" outerRadius={50} fill="blue" />
        </PieChart>
        </div>
        </div>
        <div className='p'>
    <div className='chart1'>
        <PieChart width={300} height={300}>
          <Pie data={data3} dataKey="students" outerRadius={50} fill="green" />
        </PieChart>
        </div>
        <div className='chart2'>
        <PieChart width={300} height={300}>
          <Pie data={data4} dataKey="students" outerRadius={50} fill="yellow" />
        </PieChart>
        </div>
        <div className='chart3'>
        <PieChart width={300} height={300}>
          <Pie data={data5} dataKey="students" outerRadius={50} fill="aqua" />
        </PieChart>
        </div>
        </div>
     */}
        </div>
);
}
  
export default Pchart;