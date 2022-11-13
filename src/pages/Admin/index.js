import React, { useState } from 'react'
import Footer from '../../components/Footer'
import HomeHeader from '../../components/HomeHeader'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Members from './Members';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


function Admin() {

    const theme = useTheme();
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  return (
    <div id='bg'>
    <div className="page-wraper">
<div id="loading-icon-bx" />
<HomeHeader />
{/* Content */}
<div className="page-content bg-white">
{/* inner page banner */}
<div  className="page-banner ovbl-dark" style={{backgroundImage: 'url(assets/images/back-green.jpg)'}}>
<div className="container">
    <div className="page-banner-entry">
      <h1 className="text-white">Admin Panel</h1>
    </div>
  </div>
</div>

<div className="content-block">
<AppBar position="static">
  <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor="secondary"
    textColor="inherit"
    variant="fullWidth"
    aria-label="full width tabs example"
  >
    <Tab label="Members" {...a11yProps(0)} />
    <Tab label="Events" {...a11yProps(1)} />
    <Tab label="Projects" {...a11yProps(2)} />
  </Tabs>
</AppBar>
<SwipeableViews
  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
  index={value}
  onChangeIndex={handleChangeIndex}
>
  <TabPanel value={value} index={0} dir={theme.direction}>
    <Members />
  </TabPanel>
  <TabPanel value={value} index={1} dir={theme.direction}>
    Events
  </TabPanel>
  <TabPanel value={value} index={2} dir={theme.direction}>
    Projects
  </TabPanel>
</SwipeableViews>

</div>
{/* contact area END ==== */}

</div>
{/* Content END*/}
{/* Footer ==== */}
<Footer />
{/* Footer END ==== */}
</div>
{/* External JavaScripts */}
</div>
  )
}

export default Admin