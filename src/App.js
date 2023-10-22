import './App.css';

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from "./components/NumberOfEvents";
// import Event from "./components/Event";

import { useEffect, useState } from "react";


const App = () => {
  
 return (
   <div className="App"> 
     {/* <Event />     */}
     <EventList />
     <CitySearch />
     <NumberOfEvents />
   </div>
 );
}

export default App;