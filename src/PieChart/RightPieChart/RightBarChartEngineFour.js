import React,{useState, useEffect} from 'react'
import { Divider, Grid, IconButton, Tab, Tabs, Typography, Box } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MonitorIcon from '@mui/icons-material/Monitor';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { BorderBottom, CheckBox } from '@mui/icons-material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const RightBarCharts=()=>{

    const StyledText = styled("text")(({ theme }) => ({
        fill: "#A28C45",
        textAnchor: "middle",
        dominantBaseline: "central",
        fontSize: 20,
        
        
      }));

    const [pieChartDateOne, setpieChartDateOne] = useState(1000)
    const [pieChartDateTwo, setpieChartDateTwo] = useState(9000)    
    const [array] = React.useState([ 7000, 8000, 9000, 7000, 4000, 6000, 2000, 3000, 4000, 5000, 6000, ]);
    
      const delay = (ms) =>
        new Promise((res) => {
          setTimeout(() => {
            res();
          }, ms);
        });
    
        useEffect(() => {
          (async function () {
            for (let team of array) {
              await delay(1000);
              if(team >= 75){
                  console.log("red")
              }
              console.log(team)
              setpieChartDateOne(team)
              setpieChartDateTwo(Math.abs(team- 10000))
              console.log(Math.abs(team - 10000)) 
            }
          })();
        }, [array]);
      
      const data = [
        { label: 'Group A', value: pieChartDateOne,color:"#646464" },
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
                      background:"#E6E6E6",
                      marginRight:"12%"
                      
                    }}
                     >
                    <PieChart series={[{startAngle: -140,endAngle: 140,paddingAngle: 0,innerRadius: 56,outerRadius: 70,data,},]} margin={{ right: 5 }}  width={160} height={160} legend={{ hidden: true }}>
                    <PieCenterLabel >RPM</PieCenterLabel>
                  </PieChart>
                  <Typography sx={{position:"relative", left:"35%", bottom:"80%", fontSize:"1.2vw", color:"#000"}}>{pieChartDateOne}</Typography>
                    </div>
    
  )
}

export default RightBarCharts;