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
  const filteredCusPos = allRecommendations[0]?.segmentResponses.Customer.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
  const filteredCusNeg = allRecommendations[0]?.segmentResponses.Customer.filter(seg => {
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
        uv: typeof filteredCusPos !== "undefined" ? filteredCusPos.length : 0,
      },
      {
        name: 'Market',
        uv: typeof filteredMarkPos !== "undefined" ? filteredMarkPos.length : 0 ,
      },
      {
        name: 'Value',
        uv: typeof filteredValPos !== "undefined" ? filteredValPos.length : 0,
      },
      {
        name: 'Activities',
        uv: typeof filteredActPos !== "undefined" ? filteredActPos.length : 0 ,
      },
      {
        name: 'Resources',
        uv: typeof filteredResPos !== "undefined" ? filteredResPos.length : 0,
      },
    ];
    const data2 = [
      {
        name: 'Customer positive',
        uv: typeof filteredCusPos !== "undefined" ? filteredCusPos.length : 0,
      },
      {
        name: 'Customer Negative',
        uv: typeof filteredCusNeg !== "undefined" ? filteredCusNeg.length : 0,
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