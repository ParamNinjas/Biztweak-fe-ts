import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IRecomendation } from 'src/Interfaces/IRecomendation';
import { Api } from '../../services/endpoints';

  // const data = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: 'Page C',
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: 'Page D',
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: 'Page E',
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: 'Page F',
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  // ];
  const data2 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
  

  ];
  
const  Bargraph = () => {
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


  //Market pie
  const filteredMarkPos = allRecommendations[0]?.segmentResponses.Market.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
  const filteredMarkNeg = allRecommendations[0]?.segmentResponses.Market.filter(seg => {
    return seg.value === "No recommendation"
   
  }) 

  //Value Pie
    const filteredValPos = allRecommendations[0]?.segmentResponses.Value.filter(seg => {
      return seg.value !== "No recommendation"
     
    }) 
    const filteredValNeg = allRecommendations[0]?.segmentResponses.Value.filter(seg => {
      return seg.value === "No recommendation"
     
    }) 

  //Activities Pie
  const filteredActPos = allRecommendations[0]?.segmentResponses.Activities.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
  const filteredActNeg = allRecommendations[0]?.segmentResponses.Activities.filter(seg => {
    return seg.value === "No recommendation"
   
  }) 

    //Resources Pie
    const filteredResPos = allRecommendations[0]?.segmentResponses.Resources.filter(seg => {
      return seg.value !== "No recommendation"
     
    }) 
    const filteredResNeg = allRecommendations[0]?.segmentResponses.Resources.filter(seg => {
      return seg.value === "No recommendation"
     
    }) 
    const data = [
      {
        name: 'Customer',
        uv: filteredCusPos.length,
      },
      {
        name: 'Market',
        uv: filteredMarkPos.length,
      },
      {
        name: 'Value',
        uv: filteredValPos.length,
      },
      {
        name: 'Activities',
        uv: filteredActPos.length,
      },
      {
        name: 'Resources',
        uv: filteredResPos.length,
      },
    ];
    const data2 = [
      {
        name: 'Customer positive',
        uv: filteredCusPos.length,
      },
      {
        name: 'Customer Negative',
        uv: filteredCusNeg.length,
      },
    
  
    ];


    return (
        <div className="bar">
          <div className='bar1'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#38E25D" />
            </BarChart>
          </ResponsiveContainer>
          </div>
          <div className='bar2'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data2}>
              <Bar dataKey="uv" fill="#00C2CB" />
            </BarChart>
          </ResponsiveContainer>
          </div>
        </div>
        

    )
}

export default Bargraph