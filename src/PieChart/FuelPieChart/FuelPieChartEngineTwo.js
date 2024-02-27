import React,{useState, useEffect} from 'react';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { PieChart } from '@mui/x-charts/PieChart';
import { styled } from "@mui/material/styles";
import { useDrawingArea } from "@mui/x-charts/hooks";


function FuelPieChartEngineOne() {




     const [pieChartDateOne, setpieChartDateOne] = useState(10)
    const [pieChartDateTwo, setpieChartDateTwo] = useState(90)
    const [tempColor, settempColor] = useState("#CDB26B")    
    const [array] = React.useState([ 50,55,60, 65, 70,75,80,85,90,10,15, 20, 25,30,35,40, 45, 50,55,60, 65, 70,75,80,85,90]);
    
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
                settempColor("#CDB26B")
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
        { label: 'Group B', value: pieChartDateTwo,color:"#646464" },
      ];

      const StyledText = styled("text")(({ theme }) => ({
        fill: "#A28C45",
        textAnchor: "middle",
        dominantBaseline: "central",
        fontSize: 20,
        
        
      }));
      
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
       width: "180px",
       height: "180px",
       borderRadius: "50%",
       background:"#E6E6E6",
       position:"relative",
       top:"100px",
       left:"31%"
     }}
      >
   <PieChart series={[{startAngle: -80,endAngle: 80,paddingAngle: 0,innerRadius: 65,outerRadius: 80,data,},]} margin={{ right: 5 }}  width={180} height={180} legend={{ hidden: true }}>
   <PieCenterLabel >FUEL</PieCenterLabel>
   </PieChart>
   <LocalGasStationIcon  sx={{position:"relative", left:"42.7%", bottom:"80%", fontSize:"2vw", color:"#D0B272"}}/>
 </div>
 
  )
}

export default FuelPieChartEngineOne