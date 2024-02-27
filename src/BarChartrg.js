import React, {useState, useEffect} from 'react'
import { Divider, Grid, IconButton, Tab, Tabs, Typography, Box } from '@mui/material'
import { BarChart } from '@mui/x-charts/BarChart';


function BarChartrg() {
  const [pieChartDateOne, setpieChartDateOne] = useState(10)    
  const [array] = React.useState([ 3,7,2,5,4,8,9,5,4,2,1,5,7,3,4,6,7]);
  
    const delay = (ms) =>
      new Promise((res) => {
        setTimeout(() => {
          res();
        }, ms);
      });
  
      useEffect(() => {
        (async function () {
          for (let TEMP of array) {
            await delay(1000);
            setpieChartDateOne(TEMP) 
          }
        })();
      }, [array]);

  const pData = [pieChartDateOne + 40,pieChartDateOne + 2,pieChartDateOne+ 5,pieChartDateOne+ 20,pieChartDateOne+ 55,pieChartDateOne+ 53,pieChartDateOne+ 26];

  const xLabels = [
    'APR 20',
    'APR 21',
    'APR 22',
    'APR 23',
    'APR 24',
    'APR 25',
    'APR 26',
  ];

  return (
    <div>
         <div style={{ height:"12%", marginLeft:"0.9%", marginTop:"0.9%", display:"flex", alignItems:"center"}}>
    <Typography  color={"#000"} marginLeft={"1%"} borderLeft={"6px solid gray"} paddingLeft={"10px"}>FUEL FILLED</Typography>
    <Tabs aria-label="disabled tabs example"  style={{margin:"0px", padding:"0px"}}>
      <Tab  label="daily" style={{fontSize:"0.6vw"}}></Tab>
      <Tab  style={{textDecoration:"underline #000",fontSize:"0.6vw"}} label="Weekly"></Tab>
      <Tab  label="monthly" style={{fontSize:"0.6vw"}}></Tab>
    </Tabs>
    </div>
    <div style={{display:"flex",width:"100%", justifyContent:"center",alignItems:"center" }}>
    <div style={{writingMode:"vertical-lr", display:"flex", alignItems:"center", transform:"rotate(180deg)"}}>
                <Typography >Fuel Filled                                                                                                                                                                                      </Typography>
                </div>
    <BarChart
      width={450}
      height={315}
      series={[
        { data: pData, id: 'pvId', stack: 'total', color:"#FFA426" },
      
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band', categoryGapRatio: 0.5,  barGapRatio: 0, }]}
    />
    </div>
</div>
  )
}

export default BarChartrg