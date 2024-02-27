import { AppBar, Box, Button, Container, Divider, Grid, IconButton, Link, ListItem, Stack, TextField, Typography ,} from "@mui/material";
import React from "react";
import styled from 'styled-components'
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MonitorIcon from '@mui/icons-material/Monitor';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';



const Root =styled.div `
min-height:98vh;
`

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:"#1A2027",
    padding: "2px",
    textAlign: 'center',
    color: "#000",
    position:"static"
  }));
  
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: "30vh",
    },
  }));
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ];

  const data = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
    { label: 'Group D', value: 200 },
  ];
  
const HomePage=()=>{

  
    return(
        <Root style={{backgroundColor:"#FAFAFA",margin:"10px", borderRadius:"7px"}}>

    <Box sx={{width:"100%", minHeight:"10vh", backgroundColor:"#FFF", display:"flex"}} >
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
      <Grid style={{border:"1px solid #000"}} >

      </Grid>
      <Divider orientation="vertical" style={{border:"1px solid #000"}} />
      <Grid style={{border:"1px solid #000",  marginRight:"30%"}}>
        <Typography  fontSize={"1.2vw"} maxWidth={"90%"} >REMOTE MONITORING SYSTEM</Typography>
      </Grid>
      <Grid style={{border:"1px solid #000",}}> 
        <Typography color={"#FFF"}>REMOTE MONITORING SYSTEM</Typography>
      </Grid>
      </Grid>

    </Box>
    <Box sx={{width:"100%", minHeight:"6vh", backgroundColor:"gray", display:"flex", marginTop:"0.2%", fontSize:"1.5vw"}} >

    <Tabs  aria-label="disabled tabs example" sx={{fontSize:"1.2vw", marginTop:"0.4%"}}>
      <Tab sx={{fontSize:"0.9vw"}} label="generators" />
      <Divider orientation="vertical" style={{ height: 30, alignSelf: "center" }}/>
      <Tab sx={{fontSize:"0.9vw", color:"#CBBC02"}} label="dashboard" />
      <Divider orientation="vertical" style={{ height: 30, alignSelf: "center" }}/>
      <Tab sx={{fontSize:"0.9vw"}} label="route info" />
      <Divider orientation="vertical" style={{ height: 30, alignSelf: "center" }}/>
      <Tab sx={{fontSize:"0.9vw"}} label="off shore" />
      <Divider orientation="vertical" style={{ height: 30, alignSelf: "center" }}/>
      <Tab sx={{fontSize:"0.9vw"}} label="docking" />
      <Divider orientation="vertical" style={{ height: 30, alignSelf: "center" }}/>
      <Tab sx={{fontSize:"0.9vw"}} label="custom" />
    </Tabs>

    </Box>
    
    
    <Grid container spacing={2} >

      <Grid item width={"80px"}>
        <Grid  style={{backgroundColor:"#CBBC02", height:"81vh"}} justifyContent={"start"}  container direction={"column"}>
          <IconButton><MonitorIcon fontSize="large"/></IconButton>
          <Divider orientation="horizontal" style={{border:"1px solid gray", width: 35, alignSelf:"center"}} />
          <IconButton><QuestionAnswerOutlinedIcon fontSize="large"/></IconButton>
          <Divider orientation="horizontal" style={{border:"1px solid gray", width: 35, alignSelf:"center"}} />
          <IconButton><VideocamOutlinedIcon fontSize="large"/></IconButton>
          <Divider orientation="horizontal" style={{border:"1px solid gray", width: 35, alignSelf:"center"}} />

        </Grid>
      </Grid>
      
  <Grid item  minWidth={"95.4vw"}  >
         <Grid  style={{backgroundColor:"lightgray", height:"81vh"}}>

            <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={3.5}  >
                <Grid style={{backgroundColor:"#FFF", marginBottom:"2%", margin:"1.5%", }} >
                    <Grid style={{height:"6vh"}}  alignItems={"center"} container direction={"row"}>
                        <CalendarMonthIcon fontSize="large"/>
                        <Typography fontSize={"1.3vw"}>Total Generators</Typography>
                        <Typography style={{marginLeft:"2%", marginRight:"2%", fontSize:"1.3vw", backgroundColor:"green", padding:"1px 7px"}}>ON</Typography>
                        <Typography fontSize={"1.3vw"}>29</Typography>
                        <Typography style={{marginLeft:"2%", marginRight:"2%", fontSize:"1.3vw", backgroundColor:"red", padding:"2 px 7px"}}>OFF</Typography>
                        <Typography fontSize={"1.3vw"}>06</Typography>
                    </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3.5}>
               <Grid style={{backgroundColor:"#FFF", margin:"1.5%"}}>
                  <div style={{height:"6vh"}}></div>
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <Grid style={{backgroundColor:"#FFF", margin:"1.5%"}}>
                <Grid style={{height:"6vh"}}  alignItems={"center"} container direction={"row"}>

                        <LocalGasStationIcon fontSize="large"/>
                        <Divider orientation="vertical" style={{border:"1px solid gray", height: 35, alignSelf:"center",marginLeft:"1.5%",marginRight:"1.5%"}} />

                        <Grid  direction={"column"} textAlign={"center"}>
                          <Typography fontSize={"1vw"}>Available Fuel</Typography>
                          <Typography fontSize={"1vw"}>865 gal</Typography>
                        </Grid>
                        <Divider orientation="vertical" style={{border:"1px solid gray", height: 35, alignSelf:"center",marginLeft:"1.5%",marginRight:"1.5%"}} />
                        
                        <Grid  direction={"column"} textAlign={"center"}>
                          <Typography fontSize={"1vw"}>Used Fuel</Typography>
                          <Typography fontSize={"1vw"}>771.62 gal</Typography>
                        </Grid>

                        <Divider orientation="vertical" style={{border:"1px solid gray", height: 35, alignSelf:"center",marginLeft:"1.5%",marginRight:"1.5%"}} />
                        <Grid  direction={"column"} textAlign={"center"}>
                          <Typography fontSize={"1vw"}>Fuel Level</Typography>
                          <Typography fontSize={"1vw"}>51 cm</Typography>
                        </Grid>

                        <Divider orientation="vertical" style={{border:"1px solid gray", height: 35, alignSelf:"center",marginLeft:"1.5%",marginRight:"1.5%"}} />
                        <Grid  direction={"column"} textAlign={"center"}>
                          <Typography fontSize={"1vw"}>Fuel volume</Typography>
                          <Typography fontSize={"1vw"}>326 gal</Typography>
                        </Grid>

                        <Divider orientation="vertical" style={{border:"1px solid gray", height: 35, alignSelf:"center",marginLeft:"1.5%",marginRight:"1.5%"}} />
                        <Grid  direction={"column"} textAlign={"center"} backgroundColor='red' padding={"0% 1%"}>
                          <Typography fontSize={"1vw"} color={"#FFF"}>Alerts</Typography>
                          <Typography fontSize={"1vw"} color={"#FFF"}>08</Typography>
                        </Grid>

                    </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3.5}>
              <Grid style={{backgroundColor:"#fff", marginBottom:"2%", margin:"1.5%", height:"34vh"}} >
              

                {/* <Grid  justifyContent={"center"} backgroundColor={"#FFF"} container   >

                <Grid item xs={12} marginLeft={"20%"}>
                <PieChart series={[{startAngle: -70,endAngle: 70,paddingAngle: 0,innerRadius: 65,outerRadius: 80,data,},]} margin={{ right: 5 }} width={200} height={200} backgroundColor={"#FFF"} legend={{ hidden: true }}/>
                </Grid>
                <Grid item xs={6} marginTop={"-25%"} style={{backgroundColor:"#000", borderRadius:"80%"}}>
                <PieChart series={[{startAngle: -140,endAngle: 140,paddingAngle: 0,innerRadius: 65,outerRadius: 80,data,},]} margin={{ right: 5 }} width={200} height={200} backgroundColor={"#FFF"} legend={{ hidden: true }}/>
                </Grid>
                <Grid item xs={6} marginTop={"-25%"}>
                <PieChart series={[{startAngle: -140,endAngle: 140,paddingAngle: 0,innerRadius: 65,outerRadius: 80,data,},]} margin={{ right: 5 }} width={200} height={200} legend={{ hidden: true }}/>
                </Grid>
                </Grid> */}
 
              </Grid>
              </Grid>

              <Grid item xs={3.5}>
              <Grid style={{backgroundColor:"#FFF", margin:"1.5%", height:"34vh"}}>
                
              </Grid>
              </Grid>
              <Grid item xs={5}>
              <Grid style={{backgroundColor:"#FFF", margin:"1.5%"}}>
              <LineChart
                  width={600}
                  height={300}
                  series={[
                    { data: pData, label: 'pv', yAxisKey: 'leftAxisId', color: '#000' },
                    { data: uData, label: 'uv', yAxisKey: 'rightAxisId', color: '#000' },
                  ]}
                  xAxis={[{ scaleType: 'point', data: xLabels }]}
                  yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
                  rightAxis="rightAxisId"
                />
              </Grid>
              </Grid>
              <Grid item xs={3.5}>
              <Grid style={{backgroundColor:"#FFF", marginBottom:"2%", margin:"1.5%"}}>
                  <div style={{height:"34vh"}}></div>
              </Grid>
              </Grid>
              <Grid item xs={3.5}>
              <Grid style={{backgroundColor:"#FFF", margin:"1.5%"}}>
                <div style={{height:"34vh"}}></div>
              </Grid>
              </Grid>
              <Grid item xs={5}>
              <Grid style={{backgroundColor:"#000", margin:"1.5%"}}>
                <div style={{height:"34vh", display:"flex", justifyContent:"space-between"}}>
                  <div style={{backgroundColor:"#FFF", height:"100%", width:"49.5%"}}>
                    <div style={{borderLeft:"10px solid gray", height:"3.5vh", margin:"1%", display:"flex"}}>
                      <Typography>FUEL FILLED</Typography>
                    </div>
                  </div>
                  <div style={{backgroundColor:"#FFF", height:"100%", width:"49.5%"}}></div>

                </div>
              </Grid>
              </Grid>
            </Grid>
            
         </Grid>
      </Grid>
      

    </Grid> 
      
        </Root>
    )
}
export default HomePage;