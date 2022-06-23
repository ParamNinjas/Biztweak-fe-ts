import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IRecomendation } from 'src/Interfaces/IRecomendation';
import { Api } from '../../services/endpoints';
  
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
// Customer Bar
  const filteredCusPos = allRecommendations[0]?.segmentResponses.customer.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
  const filteredCusNeg = allRecommendations[0]?.segmentResponses.customer.filter(seg => {
    return seg.value === "No recommendation"
   
  }) 


  //Market Bar
  const filteredMarkPos = allRecommendations[0]?.segmentResponses.Market.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
 

  //Value Bar
    const filteredValPos = allRecommendations[0]?.segmentResponses.Value.filter(seg => {
      return seg.value !== "No recommendation"
     
    }) 
 

  //Activities Bar
  const filteredActPos = allRecommendations[0]?.segmentResponses.Activities.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
 

    //Resources Bar
    const filteredResPos = allRecommendations[0]?.segmentResponses.Resources.filter(seg => {
      return seg.value !== "No recommendation"
     
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