import React, { useState, useEffect } from 'react';
import "../assets/css/TabPanels.css";
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { AppBar, Tab } from '@material-ui/core';
import Panel1 from "../components/Panel1";
import Panel2 from "../components/Panel2";
import { Api } from "../constants/api"

const TabPanels = () => {
  const [raceList, setRaceList] = useState({});
  const [subRaceList, setSubRaceList] = useState([]);
  const [selected, setSelected] = useState("");
  const [image, setImage] = useState("");
  const [tabIndex, setTabIndex] = useState('1');
  const onChangeTabIndex = (event, value) => setTabIndex(value);

  useEffect(() => fetchRaceList(), []);

  const fetchRaceList = async () => {
    const response =  await Api.getRaceList;
    const { data: raceList } = response;
    setRaceList(raceList);
  }

  const fetchRaceImage = async (raza) => {
    const response =  await Api.getRaceImage(raza);
    const { data: image } = response;
    setImage(image.message);
  }

  const fetchSubRaceList = async (subraza) => {
    const response =  await Api.getSubRaceList(subraza);
    const { data: subRaceList } = response;
    setSubRaceList(subRaceList.message);
  }

  const onChange = ({ target: { value: current }}) => {
    setSelected( current );
    fetchRaceImage(current);
    fetchSubRaceList(current);
  }
  
  return(
    <TabContext value={tabIndex}>
      <AppBar position="static">
        <TabList onChange={onChangeTabIndex}>
          <Tab label="Raza" value="1" />
          <Tab label="Sub-Raza" value="2" />
        </TabList>
      </AppBar>
      <TabPanel className="panels" value="1">
        <Panel1 message={raceList.message} selected={selected} image={image} onChange={onChange}/>
      </TabPanel>
      <TabPanel className="panels" value="2">
        <Panel2 subRaceList={subRaceList}/>
      </TabPanel>
    </TabContext>
  )
}

export default TabPanels;