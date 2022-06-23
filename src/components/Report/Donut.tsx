import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { IRecomendation } from 'src/Interfaces/IRecomendation';
import { Api } from '../../services/endpoints';
import './chart.css'

// const data6 = [
//   { name: 'Group A', value: 600 },
//   { name: 'Group B', value: 100 },
// ];
// const data7 = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 250 },
// ];
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
// Customer Pie
  const filteredCusPos = allRecommendations[0]?.segmentResponses.customer.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
  const filteredCusNeg = allRecommendations[0]?.segmentResponses.customer.filter(seg => {
    return seg.value === "No recommendation"
   
  }) 
  const data = [
    { name: 'Group A', value: typeof filteredCusPos !== "undefined" ? filteredCusPos.length : 0 },
    { name: 'Group B', value: typeof filteredCusNeg !== "undefined" ? filteredCusNeg.length : 0  },
  ];

  console.log('found it ', data)

  //Market pie
  const filteredMarkPos = allRecommendations[0]?.segmentResponses.Market.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
  const filteredMarkNeg = allRecommendations[0]?.segmentResponses.Market.filter(seg => {
    return seg.value === "No recommendation"
   
  }) 
  const data2 = [
    { name: 'Group A', value: typeof filteredMarkPos !== "undefined" ? filteredMarkPos.length : 0 },
    { name: 'Group B', value: typeof filteredMarkNeg !== "undefined" ? filteredMarkNeg.length : 0  },
  ];

  //Value Pie
    const filteredValPos = allRecommendations[0]?.segmentResponses.Value.filter(seg => {
      return seg.value !== "No recommendation"
     
    }) 
    const filteredValNeg = allRecommendations[0]?.segmentResponses.Value.filter(seg => {
      return seg.value === "No recommendation"
     
    }) 
    const data3 = [
      { name: 'Group A', value: typeof filteredValPos !== "undefined" ? filteredValPos.length : 0 },
      { name: 'Group B', value: typeof filteredValNeg !== "undefined" ? filteredValNeg.length : 0 },
    ];


  //Activities Pie
  const filteredActPos = allRecommendations[0]?.segmentResponses.Activities.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
  const filteredActNeg = allRecommendations[0]?.segmentResponses.Activities.filter(seg => {
    return seg.value === "No recommendation"
   
  }) 
  const data4 = [
    { name: 'Group A', value: typeof filteredActPos !== "undefined" ? filteredActPos.length : 0 },
    { name: 'Group B', value: typeof filteredActNeg !== "undefined" ? filteredActNeg.length : 0  },
  ];

    //Resources Pie
    const filteredResPos = allRecommendations[0]?.segmentResponses.Resources.filter(seg => {
      return seg.value !== "No recommendation"
     
    }) 
    const filteredResNeg = allRecommendations[0]?.segmentResponses.Resources.filter(seg => {
      return seg.value === "No recommendation"
     
    }) 
    const data5 = [
      { name: 'Group A', value: typeof filteredResPos !== "undefined" ? filteredResPos.length : 0},
      { name: 'Group B', value: typeof filteredResNeg !== "undefined" ? filteredResNeg.length : 0  },
    ];
    const data6 = [
      { name: 'Group A', value: typeof filteredCusPos !== "undefined" ? filteredCusPos.length : 0 },
      { name: 'Group B', value: typeof filteredMarkPos !== "undefined" ? filteredMarkPos.length : 0 },
      { name: 'Group C', value: typeof filteredValPos !== "undefined" ? filteredValPos.length : 0 },
      { name: 'Group D', value: typeof filteredActPos !== "undefined" ? filteredActPos.length : 0 },
      { name: 'Group E', value: typeof filteredValPos !== "undefined" ? filteredValPos.length : 0 },
    ];
    const data7 = [
      { name: 'Group A', value: typeof filteredCusNeg !== "undefined" ? filteredCusNeg.length : 0 },
      { name: 'Group B', value: typeof filteredMarkNeg !== "undefined" ? filteredMarkNeg.length : 0 },
      { name: 'Group C', value: typeof filteredValNeg !== "undefined" ? filteredValNeg.length : 0 },
      { name: 'Group D', value: typeof filteredActNeg !== "undefined" ? filteredActNeg.length : 0 },
      { name: 'Group E', value: typeof filteredValNeg !== "undefined" ? filteredValNeg.length : 0 },
    ];

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