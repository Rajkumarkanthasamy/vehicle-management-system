import { Divider, Grid, IconButton, Tab, Tabs, Typography, Box } from '@mui/material'
import React,{useState, useEffect} from 'react'
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
import BarChartrg from './BarChartrg';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import LeftPieChartEngineOne from './PieChart/LeftPieChart/LeftPieChartEngineOne'
import LeftPieChartEngineTwo from './PieChart/LeftPieChart/LeftPieChartEngineTwo';
import LeftPieChartEngineThree from './PieChart/LeftPieChart/LeftPieChartEngineThree';
import LeftPieChartEngineFour from './PieChart/LeftPieChart/LeftPieChartEngineFour';
import RightPiechartEngineOne from './PieChart/RightPieChart/RightBarChartEngineOne'
import RightPiechartEngineTwo from './PieChart/RightPieChart/RightBarChartEngineTwo'
import RightPiechartEngineThree from './PieChart/RightPieChart/RightBarChartEngineThree'
import RightPiechartEngineFour from './PieChart/RightPieChart/RightBarChartEngineFour'
import FuelPieChartEngineOne from './PieChart/FuelPieChart/FuelPieChartEngineOne';
import FuelPieChartEngineTwo from './PieChart/FuelPieChart/FuelPieChartEngineTwo';
import FuelPieChartEngineThree from './PieChart/FuelPieChart/FuelPieChartEngineThree';
import FuelPieChartEngineFour from './PieChart/FuelPieChart/FuelPieChartEngineFour';
import logo from "./logo.svg"

function App() {

  const [lineChartDateOne, setlineChartDateOne] = useState(100)
  const [lineChartDateTwo, setlineChartDateTwo] = useState(200)      

  const [array] = React.useState([ 100,150, 200, 250,300,350,400, 323, 150, 355]);
    
      const delay = (ms) =>
        new Promise((res) => {
          setTimeout(() => {
            res();
          }, ms);
        });
    
        useEffect(() => {
          (async function () {
            for (let fuel of array) {
              await delay(1000);
              console.log(fuel)
              setlineChartDateOne(fuel)
              setlineChartDateTwo(Math.abs(fuel - 30))
              console.log(Math.abs(fuel - 30)) 
            }
          })();
        }, [array]);
 
  const uData = [lineChartDateOne - 10,lineChartDateOne -20,lineChartDateOne - 99,lineChartDateOne -80,lineChartDateOne - 90,lineChartDateOne - 20,lineChartDateOne - 90];

  const pData = [lineChartDateTwo - 10,lineChartDateTwo -20,lineChartDateTwo - 99,lineChartDateTwo -80,lineChartDateTwo - 90,lineChartDateTwo - 20,lineChartDateTwo - 90];



  const xLabels = [
    'APR 20',
    'APR 21',
    'APR 22',
    'APR 23',
    'APR 24',
    'APR 25',
    'APR 26',
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

  const StyledText1 = styled("text")(({ theme }) => ({
    fill: "#D0B272",
    fontSize: 20,
    paddingTop:"10%"
    
    
  }));
  
  function PieCenterLabel1({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2} color='#FFC300'>
        {children}
      </StyledText>
    );
  }

 

  return (
    <div style={{backgroundColor:"lightgray", height:"100vh", width:"100vw", overflow:"hidden"}}>

      <div style={{height:"11.1vh", width:"100vw", backgroundColor:"#FFF", display:"flex", alignItems:"center"}}>
      <img src="./logo.png" />
      <Divider variant="vertical" style={{border:"1px solid gray", height: "70%", alignSelf: "center"}}/>
      <Typography style={{marginLeft:"3%", fontSize:"1.3vw", fontWeight:"bolder"}}>REMOTE<br/> MONITORING SYSTEM</Typography>
      <div style={{display:"flex", position:"relative", left:"50vw", justifyContent:"center", alignItems:"center"}}>
        <div><img src='./profile.png' /></div>
        <div style={{display:"block"}}>
            <input placeholder='Username' style={{ borderLeft:"6px solid lightgray",margin:"5px", borderRadius:"7px", border:"none", backgroundColor:"lightgrey", height:"2vh"}} /><br/>
            <input placeholder='Password' style={{ borderLeft:"6px solid lightgray",margin:"5px", borderRadius:"7px", border:"none", backgroundColor:"lightgrey", height:"2vh"}} />
        </div>
      </div>
      </div>  
      {/* HeaderOver */}
      <div style={{backgroundColor:"#000", height:"5vh", marginTop:"0.3vh", color:"#FFF", alignItems:"center"}}>
      <Tabs  aria-label="disabled tabs example" sx={{fontSize:"1.2vw"}}>
      <Tab sx={{fontSize:"0.9vw", color:"#fff"}} label="generators" />
      <Divider orientation="vertical" style={{ height: 30, alignSelf: "center", backgroundColor:"#CBBC02" }}/>
      <Tab sx={{fontSize:"0.9vw", color:"#CBBC02"}} label="dashboard" />
      <Divider orientation="vertical" style={{ height: 30, alignSelf: "center", backgroundColor:"#fff" }}/>
      <Tab sx={{fontSize:"0.9vw", color:"#fff"}} label="route info" />
      <Divider orientation="vertical" style={{ height: 30, alignSelf: "center", backgroundColor:"#fff" }}/>
      <Tab sx={{fontSize:"0.9vw", color:"#fff"}} label="off shore" />
      <Divider orientation="vertical" style={{ height: 30, alignSelf: "center", backgroundColor:"#fff" }}/>
      <Tab sx={{fontSize:"0.9vw", color:"#fff"}} label="docking" />
      <Divider orientation="vertical" style={{ height: 30, alignSelf: "center" , backgroundColor:"#fff"}}/>
      <Tab sx={{fontSize:"0.9vw", color:"#fff"}} label="custom" />
    </Tabs>
      </div>
      {/* TabsOver */}
      <div style={{display:"flex", justifyContent:"space-between"}}>

        <Grid style={{backgroundColor:"#D0B272", width:"4vw", height:"83vh",}} justifyContent={"center"} alignItems={"center"}  >
        <IconButton style={{ padding: "1.2rem", color:"#fff"}}><MonitorIcon fontSize="large"/></IconButton>
        <Divider orientation="horizontal" style={{border:"1px solid #fff", width: 35, alignSelf:"center", marginLeft: "1.2rem"}} />
          <IconButton style={{ padding: "1.2rem", color:"#fff"}}><QuestionAnswerOutlinedIcon fontSize="large"/></IconButton>
          <Divider orientation="horizontal" style={{border:"1px solid #fff", width: 35, alignSelf:"center", marginLeft: "1.2rem"}} />
          <IconButton style={{ padding: "1.2rem", color:"#fff"}}><VideocamOutlinedIcon fontSize="large"/></IconButton>
          <Divider orientation="horizontal" style={{border:"1px solid #fff", width: 35, alignSelf:"center", marginLeft: "1.2rem"}} />
          <Divider orientation="horizontal" style={{border:"1px solid #fff", width: 35, alignSelf:"center", marginLeft: "1.2rem", position:"absolute", bottom:"70px"}} />
          <IconButton style={{ padding: "1.2rem", color:"#fff", position:"absolute", bottom:"1px"}}><SettingsSuggestIcon fontSize="large"/></IconButton>
          
        </Grid>
        {/* leftMenu */}
        <div style={{backgroundColor:"lightgray", width:"95vw", height:"83vh"}}>

        <div style={{display:"flex", justifyContent:"space-between", margin:"0.5%"}}>
            <div style={{width:'25vw', height:"6vh", backgroundColor:"white",margin:".1%", display:"flex", alignItems:"center"}}>
                        <CalendarMonthIcon fontSize="large"/>
                        <Typography fontSize={"1.3vw"}>Total Generators</Typography>
                        <Typography style={{marginLeft:"2%", marginRight:"2%", fontSize:"1.3vw", backgroundColor:"green", padding:"1px 7px"}}>ON</Typography>
                        <Typography fontSize={"1.3vw"}>29</Typography>
                        <Typography style={{marginLeft:"2%", marginRight:"2%", fontSize:"1.3vw", backgroundColor:"red", padding:"2 px 7px"}}>OFF</Typography>
                        <Typography fontSize={"1.3vw"}>06</Typography>
            </div>
            <div style={{width:'25vw', height:"6vh", backgroundColor:"white",margin:".1%"}}></div>
            <div style={{width:'44vw', height:"6vh", backgroundColor:"white",margin:".1%", display:"flex", alignItems:"center"}}>
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
            </div>
          </div>

        <div style={{display:"flex", justifyContent:"space-between", margin:"0.5%"}}>
            
            <div style={{width:'25vw', height:"36vh", backgroundColor:"white",margin:".1%"}}>

              <div style={{display:"flex", justifyContent:"space-between", margin:"1%"}}>
              <Typography  color={"#000"} marginLeft={"1%"} borderLeft={"6px solid gray"} paddingLeft={"10px"} >ENGINE - 1</Typography>
              <Box sx={{width:"20px", height:"20px", backgroundColor:"gray"}}></Box>
              </div>
              
                <div style={{marginTop:"-10%"}}>

                   <FuelPieChartEngineOne/>
                

                <div style={{display:"flex", justifyContent:"space-around", }}>
                    
                   <LeftPieChartEngineOne/>
                  
                  <RightPiechartEngineOne/>
                    </div>
              </div>
            </div>

            <div style={{width:'25vw', height:"36vh", backgroundColor:"white",margin:"0.1%"}}>

            <div style={{display:"flex", justifyContent:"space-between", margin:"1%"}}>
              <Typography  color={"#000"} marginLeft={"1%"} borderLeft={"6px solid gray"} paddingLeft={"10px"} >ENGINE - 2</Typography>
              <Box sx={{width:"20px", height:"20px", border:"1px solid gray"}}></Box>
              </div>
              
                <div style={{marginTop:"-10%"}}>
                   <FuelPieChartEngineTwo/>
                <div style={{display:"flex", justifyContent:"space-around", }}>
                    
                  <LeftPieChartEngineTwo/>
                  
                    <RightPiechartEngineTwo/>
                    </div>
              </div>

            </div>

            <div style={{width:'44vw', height:"36vh", backgroundColor:"white",margin:".1%"}}>
              <div style={{width:"95%", height:"12%", marginLeft:"0.9%", marginTop:"0.9%", display:"flex", alignItems:"center"}}>
              <Typography fontSize={"1vw"} color={"#000"} marginLeft={"1%"} borderLeft={"6px solid gray"} paddingLeft={"10px"}>GENERATOR FUEL USAGE BREAKUP</Typography>
              <Tabs aria-label="disabled tabs example">
                <Tab label="daily"></Tab>
                <Tab style={{textDecoration:"underline #000",}} label="Weekly"></Tab>
                <Tab label="monthly"></Tab>
              </Tabs>
              </div>
              <div style={{display:"flex", alignItems:"center"}}>

              
                <div style={{writingMode:"vertical-rl", transform:"rotate(180deg)", display:"flex", marginLeft:"5%"}}>
                <Box sx={{width:"20px", height:"20px", backgroundColor:"#507E4F", marginBottom:"10px"}}></Box>
              <Typography style={{writingMode:"vertical-rl", marginLeft:"5%"}}>Energy Generated (KWH)</Typography>
              </div>
               <LineChart
                  width={650}
                  height={325}
                  
                  series={[
                    { data: pData, yAxisKey: 'leftAxisId', color: '#FFC300' },
                    { data: uData, yAxisKey: 'rightAxisId', color: '#507E4F' },
                  ]}
                  xAxis={[{ scaleType: 'point', data: xLabels }]}
                  yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
                  rightAxis="rightAxisId"
                />
                <div style={{writingMode:"vertical-rl", display:"flex", alignItems:"center", marginRight:"5%"}}>
                  <Box sx={{width:"20px", height:"20px", backgroundColor:"#FFC300", marginBottom:"10px"}}></Box>
                <Typography >Fuel usage</Typography>
                </div>
                </div>
            </div>
          </div>

          <div style={{display:"flex", justifyContent:"space-between", margin:"0.5%"}}>
            <div style={{width:'25vw', height:"36vh", backgroundColor:"white",margin:".1%"}}>

            <div style={{display:"flex", justifyContent:"space-between", margin:"1%"}}>
              <Typography  color={"#000"} marginLeft={"1%"} borderLeft={"6px solid gray"} paddingLeft={"10px"} >ENGINE - 3</Typography>
              <Box sx={{width:"20px", height:"20px", border:"1px solid gray"}}></Box>
              </div>
              
                <div style={{marginTop:"-10%"}}>
                   <FuelPieChartEngineThree/>
                <div style={{display:"flex", justifyContent:"space-around", }}>
                    
                    <LeftPieChartEngineThree/>
                  
                    <RightPiechartEngineThree/>
                    </div>
              </div>

            </div>
            <div style={{width:'25vw', height:"36vh", backgroundColor:"white",margin:".1%"}}>

            <div style={{display:"flex", justifyContent:"space-between", margin:"1%"}}>
              <Typography  color={"#000"} marginLeft={"1%"} borderLeft={"6px solid gray"} paddingLeft={"10px"} >ENGINE - 4</Typography>
              <Box sx={{width:"20px", height:"20px", border:"1px solid gray"}}></Box>
              </div>
              
                <div style={{marginTop:"-10%"}}>
                  <FuelPieChartEngineFour/>
                <div style={{display:"flex", justifyContent:"space-around", }}>
                    
                    <LeftPieChartEngineFour/>
                  
                    <RightPiechartEngineFour/>
                    </div>
              </div>

            </div>
            <div style={{width:'44vw', height:"36vh", backgroundColor:"lightgray",margin:".1%", display:"flex", justifyContent:"space-between"}}>

            <div style={{width:'21.8vw', height:"36vh", backgroundColor:"#FFF",}}>

           <BarChartrg/>
            </div>
            <div style={{width:'21.8vw', height:"36vh", backgroundColor:"#FFF",  overflow:"scroll"}}>

                <div style={{ height:"12%",  marginLeft:"0.9%", marginTop:"0.9%", display:"flex", alignItems:"center", position:"-webkit-sticky"}}>
                  <Typography  color={"#000"} marginLeft={"1%"} borderLeft={"6px solid gray"} paddingLeft={"10px"} >ALERTS</Typography>
                </div>

                <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: '#fff' }}>
             <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}>
                <ListItem alignItems="flex-start" >
                  <ListItemAvatar>
                    <Box sx={{width:"20px", height:"20px", backgroundColor:"green", borderRadius:"10px", marginLeft:"20%"}}></Box>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Today"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
      <hr style={{borderTop:"1px dashed gray", marginLeft:"20%"}}/>
                  <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Box sx={{width:"20px", height:"20px", backgroundColor:"#FFC300", borderRadius:"10px", marginLeft:"20%"}}></Box>
                  </ListItemAvatar>
                    <ListItemText
                      primary="Today"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            to Scott, Alex, Jennifer
                          </Typography>
                          {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <hr style={{borderTop:"1px dashed gray", marginLeft:"20%"}}/>
                  <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Box sx={{width:"20px", height:"20px", backgroundColor:"red", borderRadius:"10px", marginLeft:"20%"}}></Box>
                  </ListItemAvatar>
                    <ListItemText
                      primary="yesterday"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Sandra Adams
                          </Typography>
                          {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                      }
                    />
                  </ListItem>

                  <hr style={{borderTop:"1px dashed gray", marginLeft:"20%"}}/>
                  <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Box sx={{width:"20px", height:"20px", backgroundColor:"red", borderRadius:"10px", marginLeft:"20%"}}></Box>
                  </ListItemAvatar>
                    <ListItemText
                      primary="yesterday"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Sandra Adams
                          </Typography>
                          {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
    </List>
    </Box>
            </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App


//
