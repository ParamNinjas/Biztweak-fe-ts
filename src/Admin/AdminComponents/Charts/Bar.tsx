import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { IRecomendation } from 'src/Interfaces/IRecomendation';
import { Api } from '../../../services/endpoints';


export default function ConceptBar() {
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
  const filteredCusPos = allRecommendations[0]?.segmentResponses.Customer && allRecommendations[0]?.segmentResponses.Customer.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
  const filteredCusNeg = allRecommendations[0]?.segmentResponses.Customer && allRecommendations[0]?.segmentResponses.Customer.filter(seg => {
    return seg.value === "No recommendation"
   
  }) 


  //Market Bar
  const filteredMarkPos = allRecommendations[0]?.segmentResponses.Market && allRecommendations[0]?.segmentResponses.Market.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
 

  //Value Bar
    const filteredValPos = allRecommendations[0]?.segmentResponses.Value && allRecommendations[0]?.segmentResponses.Value.filter(seg => {
      return seg.value !== "No recommendation"
     
    }) 
 

  //Activities Bar
  const filteredActPos = allRecommendations[0]?.segmentResponses.Activities && allRecommendations[0]?.segmentResponses.Activities.filter(seg => {
    return seg.value !== "No recommendation"
   
  }) 
 

    //Resources Bar
    const filteredResPos = allRecommendations[0]?.segmentResponses.Resources && allRecommendations[0]?.segmentResponses.Resources.filter(seg => {
      return seg.value !== "No recommendation"
     
    }) 
 
    const data = [
      {
        name: 'Customer', 
        pv: typeof filteredCusPos !== "undefined" ? filteredCusPos.length : 0,
      },
      {
        name: 'Market',
        pv: typeof filteredMarkPos !== "undefined" ? filteredMarkPos.length : 0 ,
      },
      {
        name: 'Value',
        pv: typeof filteredValPos !== "undefined" ? filteredValPos.length : 0,
      },
      {
        name: 'Activities',
        pv: typeof filteredActPos !== "undefined" ? filteredActPos.length : 0 ,
      },
      {
        name: 'Resources',
        pv: typeof filteredResPos !== "undefined" ? filteredResPos.length : 0,
      },
    ];
    // const data2 = [
    //   {
    //     name: 'Customer positive',
    //     uv: typeof filteredCusPos !== "undefined" ? filteredCusPos.length : 0,
    //   },
    //   {
    //     name: 'Customer Negative',
    //     uv: typeof filteredCusNeg !== "undefined" ? filteredCusNeg.length : 0,
    //   },
    
  
    // ];

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="pv" fill="#018749" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
