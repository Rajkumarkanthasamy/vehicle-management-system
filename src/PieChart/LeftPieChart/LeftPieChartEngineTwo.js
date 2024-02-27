import React, { useState, useEffect } from 'react'
import { Divider, Grid, IconButton, Tab, Tabs, Typography, Box } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const LeftPieChartEngineTwo=()=>{
  const StyledText = styled("text")(({ theme }) => ({
    fill: "#A28C45",
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20, 
  }));
    const [pieChartDateOne, setpieChartDateOne] = useState(10)
    const [pieChartDateTwo, setpieChartDateTwo] = useState(90)
    const [tempColor, settempColor] = useState("#69B3D0")    
    const [array] = React.useState([  50,55,60, 65, 70,75,80,85,90, 10,15, 20, 25,30,35,40, 45]);
    
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

              if(TEMP >= 80){
                  settempColor("red")
              }else if(TEMP >= 70){
                  settempColor("#FC8B38")
              }else{
                settempColor("#69B3D0")
              }
              console.log(TEMP)
              setpieChartDateOne(TEMP)
              setpieChartDateTwo(Math.abs(TEMP- 100))
              console.log(Math.abs(TEMP- 100)) 
            }
          })();
        }, [array]);

    
   


      const data = [
        { label: 'Group A', value: pieChartDateOne,color:tempColor },
        { label: 'Group B', value: pieChartDateTwo,color:"#FFA325" },
      ];

      function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
          <StyledText x={left + width / 2} y={top + height / 2} color='#FFC300'>
            {children}
          </StyledText>
        );
      }
    
  return (
    
    <div
    style={{
      width: "160px",
      height: "160px",
      borderRadius: "50%",
      opacity:"0.9",
      background:"#E6E6E6",
      marginLeft:"12%"
      
    }}
     >
    <PieChart series={[{startAngle: -140,endAngle: 140,paddingAngle: 0,innerRadius: 56,outerRadius: 70,data,},]} margin={{ right: 5 }}  width={160} height={160} legend={{ hidden: true }}>
    <PieCenterLabel >TEMP</PieCenterLabel>
  </PieChart>
  <Typography sx={{position:"relative", left:"39%", bottom:"80%", fontSize:"1.5vw", color:"#000"}}>{pieChartDateOne}°</Typography>
    </div>
    
  )
}

export default LeftPieChartEngineTwo;