import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { selectRecomendationState, setAllUserRecomendations , setSelectedRecomendation } from "../../Slice/createSlice";


export default function NewBar() {


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
let barInfoArray = [] as any[]
if(selected[0]?.segmentResponses != null){
barInfoArray = Object.keys(selected[0]?.segmentResponses)
}
let barData = [] as any[]
if (selected[0]?.segmentResponses != null) {
  barData = Object.values(selected[0]?.segmentResponses).map( 
    (data : any) => {
      return data.length          
  // const barInfo = {
  //   data?.map(
      
  // }
    }
    
)
}


const barKey = barInfoArray.map((name : any, index : number) => ({  name , pv : barData[index] }))
console.log("here is the Data", barData , barInfoArray , barKey)
 

  return (
    <BarChart
      width={700}
      height={300}
      data={barKey}
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
      <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
