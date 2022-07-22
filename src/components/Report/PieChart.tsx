import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { selectRecomendationState, setAllUserRecomendations , setSelectedRecomendation } from "../../Slice/createSlice";

const data = [
  { name: "Group A", value: 4 },
  { name: "Group B", value: 11 },
  { name: "Group C", value: 4 },
  { name: "Group D", value: 4 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


export default function PChart() {
  const state = useSelector(selectRecomendationState)
console.log('state HealthReport', state )
const stateData  = []
stateData.push(state)
console.log("stateData .", stateData)
const stateDataview  = []
stateDataview.push(state.persistedReducer)
console.log("stateData", stateDataview)
const reco = []
reco.push(stateDataview[0].RecomendationReducer)
console.log('Recommended', reco)
const selected = []
selected.push(reco[0].selectedRecomendation)
console.log("selected Recomendation", selected[0]?.segmentResponses)
const barInfoArray = Object.keys(selected[0]?.segmentResponses)
const barData = Object.values(selected[0]?.segmentResponses).map( 
        (data : any) => {
          return data.length          
      // const barInfo = {
      //   data?.map(
          
      // }
        }
        
)
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
console.log('bar data', barData)
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
