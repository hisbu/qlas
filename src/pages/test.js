// import React, {Component} from 'react';
// import Carousel from './../component/carouselUserDashboard'
// import Discus from 'disqus-react'
// import Disqus from 'disqus-react';

// class test extends Component{
//   render(){
//     const disqusShortname = "qelas"
//     const discusConfig = {
//       url : "http://localhost:3000",
//       identifier  : 'article_id',
//       title       : 'Title article'
//     }

//     return(
//       <div className='container'>
//         <div className='col-6'>
//           {/* <Carousel/> */}
//         <h1>test page</h1>
//         <Disqus.DiscussionEmbed
//           shortname={disqusShortname}
//           config={discusConfig}
//           />
//           {/* <div className='boks'></div>
//           <div className='boks' style={{borderRadius:'18px'}}></div>
//           <div className='boks'></div>
//           <div className='boks'></div>
//           <div className='boks'></div>
//           <div className='boks'></div>
//           <div className='boks'></div> */}
//         </div>
//       </div>
//     )
//   }
// }

// export default test;







import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    // height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
        <div className='boks'></div>
        <div className='boks'></div>
        <div className='boks'></div>
        <div className='boks'></div>
        <div className='boks'></div>
        <div className='boks'></div>
        <div className='boks'></div>
        <div className='boks'></div>
        <div className='boks'></div>
        <div className='boks'></div>
        <div className='boks'></div>
      </TabPanel>
    </div>
  );
}

