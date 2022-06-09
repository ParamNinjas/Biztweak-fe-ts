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
// import './Report.css'

interface IDataItem {
    segment: string,
    sale: number,
    total: number,
  }
  
  const chartData: IDataItem[] = [
    { segment: 'C', sale: 80, total: 987 },
    { segment: 'R', sale: 30, total: 3000 },
    { segment: 'V', sale: 70, total: 1100 },
    { segment: 'P', sale: 100, total: 7100 },
    { segment: 'K', sale: 40, total: 4300 },
    { segment: 'D', sale: 70, total: 7500 },
  ];
const  Bargraph = () => {
    return (
        <div className="bar">
        <Chart
          data={chartData}
        >
          <ValueScale name="sale" />
          <ValueScale name="total" />

          <ArgumentAxis />
          <ValueAxis scaleName="sale" showGrid={false} showLine={true} showTicks={true} />
          <ValueAxis scaleName="total" position="right" showGrid={false} showLine={true} showTicks={true} />

          <BarSeries
            name="Units Sold"
            valueField="sale"
            argumentField="segment"
            scaleName="sale"
          />
        </Chart>
        </div>

    )
}

export default Bargraph