import React from 'react';
// import Paper from '@mui/material/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';
import { Animation } from '@devexpress/dx-react-chart';
// import './Report.css'

interface IDataItem {
    segment: string,
    sale: number,
    total: number,
  }
  
  const data = [
    { year: '1950', population: 2.525 },
    { year: '1960', population: 3.018 },
    { year: '1970', population: 3.682 },
    { year: '1980', population: 4.440 },
    { year: '1990', population: 5.310 },
    { year: '2000', population: 6.127 },
    { year: '2010', population: 6.930 },
  ];
const  Bargraph = () => {
  console.log("Data here", chartData)
  const { data: chartData } = this.state;
    return (
        <div className="bar">
          <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          {/* <Title text="World population" /> */}
          <Animation />
        </Chart>
        </div>

    )
}

export default Bargraph