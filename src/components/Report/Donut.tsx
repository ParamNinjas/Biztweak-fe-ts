import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { IRecomendation } from 'src/Interfaces/IRecomendation';
import { Api } from '../../services/endpoints';
import './chart.css'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 100 },
];
const data2 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 50 },
];
const data3 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 100 },
];
const data4 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 900 },
];
const data5 = [
  { name: 'Group A', value: 600 },
  { name: 'Group B', value: 100 },
];
const data6 = [
  { name: 'Group A', value: 600 },
  { name: 'Group B', value: 100 },
];
const data7 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 250 },
];
const COLORS = ['#D3D3D3', '#4DB282', '#FFBB28', '#FF8042'];


const Donut = () => {
  const [allRecommendations, setAllRecommendations] = useState<IRecomendation[]>([]);
  const test = async () =>{
      const allRecommendations = await Api.GET_AllRecommendations()
      const result = allRecommendations.result? allRecommendations.result : [] as IRecomendation[];
      setAllRecommendations(result)
      // setInitialize(true)
  }
  useEffect(() => {
    test()
   
  });

  const filteredCusPos = allRecommendations[0]?.segmentResponses.customer.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
  const filteredCusNeg = allRecommendations[0]?.segmentResponses.customer.filter(seg => {
    return seg.value === "No recommendation"
   
  }) 
  // const cusPos = filteredCusPos.length
  // console.log('Data', filteredCusPos.length)
  // const data = [
  //   { name: 'Group A', value: 400 },
  //   { name: 'Group B', value: 100 },
  // //   { name: 'Group C', value: 300 },
  // //   { name: 'Group D', value: 200 },
  // ];

    return (
        <div>
        <div className='group1'>
          <div className='chart1'>
        <PieChart width={700} height={300} >
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
      <div className='chart2'>
      <PieChart width={700} height={300} >
        <Pie
          data={data2}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
      <div className='chart3'>
      <PieChart width={700} height={300} >
        <Pie
          data={data3}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
      <div className='chart4'>
      <PieChart width={700} height={300} >
        <Pie
          data={data4}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
      <div className='chart5'>
      <PieChart width={700} height={300} >
        <Pie
          data={data5}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
      </div>
      <div className='group2'>
      <div className='chart6'>
      <PieChart width={700} height={300} >
        <Pie
          data={data6}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
      <div className='chart7'>
      <PieChart width={700} height={300} >
        <Pie
          data={data7}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
      </div>
        </div>
    )
}

export default Donut