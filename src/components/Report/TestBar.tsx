import React from "react";
import { Chart } from "react-google-charts";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
declare global {
    namespace JSX {
      interface IntrinsicElements {
        item: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }
  const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })
  

 const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

//  const options = {
//   chart: {
//     title: "Company Performance",
//     subtitle: "Sales, Expenses, and Profit: 2014-2017",
//   },
// };

 function NewBar() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
    //   options={options}
    />
  );
}

export default NewBar;