import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { selectRecomendationState, setAllUserRecomendations , setSelectedRecomendation } from "../../Slice/createSlice";

// const data = [
//   { name: "Group A", value: 4 },
//   { name: "Group B", value: 11 },
//   { name: "Group C", value: 4 },
//   { name: "Group D", value: 4 }
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
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
const Test = () => {
  return "1"
}


export default function PChart(props : any) {
  const state = useSelector(selectRecomendationState)
  
console.log("Proplist" , props)
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={props.barkeyinfo}
        cx={200}
        cy={200}
        labelLine={false}
        label={Test}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {props?.barkeyinfo && props?.barkeyinfo.map((entry : any, index : any) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
